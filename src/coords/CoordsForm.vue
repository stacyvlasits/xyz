<template>
<div>
  <h2>Coords Form Template</h2>
  <p>
    <select name="input_format" v-on:change="onFoo($event.target.value)">
      <option value="dms">Deg°/Min'/Sec"</option>
      <option value="deg">Deg°</option>
    </select>
    <form name="coords_degrees" v-show="showDegrees">
      <h2>WGS84 Coordinates (Degrees)</h2>
      <table>
        <tr>
          <td>Latitude:</td>
          <td>
            <input type="number" v-model="coord.latDeg" step="any">° N
          </td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>
            <input type="number" v-model="coord.lonDeg" step="any">° E
          </td>
        </tr>
      </table>
      <button type="submit">Submit</button>
    </form>
    <form name="coords_dms" v-show="showDms">
      <h2>WGS84 Coordinates (Degrees, Minutes, Seconds)</h2>
      <table>
        <tr>
          <td>Latitude:</td>
          <td>
            <input type="number" v-model="coord.latDeg">°
            <input type="number" v-model="coord.latMin">'
            <input type="number" v-model="coord.latSec" step="any">
          </td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>
            <input type="number" v-model="coord.lonDeg">°
            <input type="number" v-model="coord.lonMin">'
            <input type="number" v-model="coord.lonSec" step="any">
          </td>
        </tr>
      </table>
      <button type="submit">Submit</button>
    </form>
    <h2>LV95 Output</h2>
    <div>{{lv95N}} N {{lv95E}} E</div>
</div>
</template>
<script>
import {dms2deg, wgs2lv95} from './coords.js';
export default {
  data() {
    return {
      coord: {
        latDeg: 46, // 46.951082773
        latMin: 57,
        latSec: 3.89798,
        lonDeg: 7,  // 7.438632421
        lonMin: 26,
        lonSec: 19.07672,
      },
      showDegrees: false,
      showDms: true,
      lv95N: 1200000,
      lv95E: 2600000,
    }
  },
  methods: {
    onFoo: function(value) {
      switch(value) {
      case 'dms':
        this.showDegrees = false;
        this.showDms = true;
        break;
      case 'deg':
        this.showDegrees = true;
        this.showDms = false;
      }
    }
  },
  watch: {
    coord: {
      handler: function() {
        const c = this.coord;
        let lat, lon;
        if (this.showDms) {
          lat = dms2deg(parseFloat(c.latDeg), parseFloat(c.latMin), parseFloat(c.latSec));
          lon = dms2deg(parseFloat(c.lonDeg), parseFloat(c.lonMin), parseFloat(c.lonSec));
        } else {
          lat = dms2deg(parseFloat(c.latDeg));
          lon = dms2deg(parseFloat(c.lonDeg));
        }
        const [N, E] = wgs2lv95(lat, lon);
        this.lv95N = N;
        this.lv95E = E;
        this.$root.$emit('coord-changed', {wgs:[lat,lon], lv95:[N, E]});
      },
      deep: true
    }
  }
};
</script>
