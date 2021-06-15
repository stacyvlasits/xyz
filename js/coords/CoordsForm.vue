<template>
  <div class="coords-forms">
    <span style="width: 50pt">System:</span>
    <select name="input_format" v-on:change="onSelect($event.target.value)">
      <option v-bind:value="types.LV95">LV95</option>
      <option v-bind:value="types.WGS84_DMS">Deg°/Min'/Sec"</option>
      <option v-bind:value="types.WGS84_DEG">Deg°</option>
    </select>
    <form name="coords_dms" v-show="show == types.WGS84_DMS" class="coord-form">
      <table>
        <tr>
          <td>Latitude:</td>
          <td>
            <input v-model="dms.lat.deg" type="number" step="any" class="two-digit">°
            <input v-model="dms.lat.min" type="number" step="any" size="3" class="two-digit">'
            <input v-model="dms.lat.sec" type="number" step="0.05" size="5" class="five-digit">"
          </td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>
            <input v-model="dms.lon.deg" type="number" step="any" class="two-digit">°
            <input v-model="dms.lon.min" type="number" step="any" class="two-digit">'
            <input v-model="dms.lon.sec" type="number" step="0.05" class="five-digit">"
          </td>
        </tr>
      </table>
    </form>
    <form name="coords_degrees" v-show="show == types.WGS84_DEG" class="coord-form">
      <table>
        <tr>
          <td>Latitude:</td>
          <td>
            <input v-model="deg.lat" type="number" step="any" class="ten-digit">° N
          </td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>
            <input v-model="deg.lon" type="number" step="any" class="ten-digit">° E
          </td>
        </tr>
      </table>
    </form>
    <form name="coords_lv95" v-show="show == types.LV95" class="coord-form">
      <table>
        <tr>
          <td>Latitude:</td>
          <td><input v-model="lv95.N" type="number" step="any" class="ten-digit"> meters North</td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td><input v-model="lv95.E" type="number" step="any" class="ten-digit"> meters East</td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
import {dms2deg, wgs2lv95, lv952wgs, deg2dms, System} from './coords.js';
import {assertDefined,assertEquals} from '@pablo-mayrgundter/testing.js/testing.js';


export default {
  props: {
    coordinate: Object
  },
  data() {
    this.originalCoordinate = this.coordinate;

    let lat, lon, N, E, system, originalCoordinate;
    if (this.coordinate.system == System.WGS84) {
      [lat, lon, system] = [this.coordinate.lat, this.coordinate.lon, System.WGS84];
      [N, E] = wgs2lv95(lat, lon);
    } else if (this.coordinate.system == System.LV95) {
      [lat, lon] = lv952wgs(this.coordinate.lat, this.coordinate.lon);
      system = System.WGS84;
      [N, E] = [this.coordinate.lat, this.coordinate.lon];
      this.originalCoordinate = this.coordinate;
      this.originalCoordinate.system = System.LV95;
    } else {
      assertEquals(System.WGS84, this.coordinate.system, 'Unknown coordinate system: ', this.coordinate.system);
    }

    if (lat > 360 || lon > 360 || lat < -360 || lon < -360) {
      throw new Error('Coordinate not reified to WGS range [-360,360].');
    }

    //console.log([N, E]);
    return {
      // Main saved coordinate.
      coord: {
        lat: lat,
        lon: lon
      },
      // The rest is internal state for component displays.
      dms: {
        lat: deg2dms(lat),
        lon: deg2dms(lon),
      },
      deg: {
        lat: lat,
        lon: lon,
      },
      lv95: {
        N: N,
        E: E,
      },
      types: {
        WGS84_DMS: System.WGS84 + '-dms',
        WGS84_DEG: System.WGS84 + '-deg',
        LV95: System.LV95
      },
      show: System.LV95 //System.WGS84 + '-dms', // can't use this.types
    }
  },
  methods: {
    getCoord() {
      if (this.originalCoordinate) {
        this.coord.originalCoordinate = this.originalCoordinate;
      }
      return this.coord;
    },
    onSelect(value) {
      switch(value) {
      case this.types.WGS84_DMS:
        [this.dms.lat, this.dms.lon] = [deg2dms(this.coord.lat), deg2dms(this.coord.lon)];
        break;
      case this.types.WGS84_DEG:
        [this.deg.lat, this.deg.lon] = [this.coord.lat, this.coord.lon];
        break;
      case this.types.LV95:
        if (this.originalCoordinate && this.originalCoordinate.system == System.LV95) {
          [this.lv95.N, this.lv95.E] = [this.originalCoordinate.lat, this.originalCoordinate.lon];
        } else {
          [this.lv95.N, this.lv95.E] = wgs2lv95(this.coord.lat, this.coord.lon);
        }
        break;
      default: throw new Error('Invalid system in switch: ' + value);
      }
      this.show = value;
    }
  },
  emits: ['coord-changed'],
  watch: {
    coord: {
      handler() {
        const changeEvent = {
          lat: this.coord.lat,
          lon: this.coord.lon,
          system: System.WGS84,
          originalCoordinate: this.originalCoordinate
        };
        this.$root.$emit('coord-changed', changeEvent);
        this.$emit('coord-changed', changeEvent);
      },
      deep: true
    },
    dms: {
      handler() {
        const dms = this.dms;
        this.coord.lat = dms2deg(parseFloat(dms.lat.deg), parseFloat(dms.lat.min), parseFloat(dms.lat.sec));
        this.coord.lon = dms2deg(parseFloat(dms.lon.deg), parseFloat(dms.lon.min), parseFloat(dms.lon.sec));
        this.originalCoordinate = null;
      },
      deep: true
    },
    deg: {
      handler() {
        this.coord.lat = dms2deg(parseFloat(this.deg.lat));
        this.coord.lon = dms2deg(parseFloat(this.deg.lon));
        this.originalCoordinate = null;
      },
      deep: true
    },
    lv95: {
      handler() {
        [this.coord.lat, this.coord.lon] = lv952wgs(parseFloat(this.lv95.N), parseFloat(this.lv95.E));
        this.originalCoordinate = {
          lat: parseFloat(this.lv95.N),
          lon: parseFloat(this.lv95.E),
          system: System.LV95
        };
      },
      deep: true
    },
  }
};
</script>
<style scoped>
.coords-forms input {
  margin: 5px;
  padding: 5px;
}


.two-digit {
  width: 30pt;
}


.five-digit {
  width: 75pt;
}


.ten-digit {
  width: 150pt;
}


.coords-forms span {
    margin-right: 27px;
    padding-left: 3px;
}


.coord-form {
  margin-top: 15px;
}
</style>
