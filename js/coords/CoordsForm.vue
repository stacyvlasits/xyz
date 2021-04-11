<template>
  <div>
    <select name="input_format" v-on:change="onSelect($event.target.value)">
      <option value="dms">Deg°/Min'/Sec"</option>
      <option value="deg">Deg°</option>
      <option value="lv95">LV95</option>
    </select>
    <form name="coords_dms" v-show="dms.show">
      <table>
        <tr>
          <td>Latitude:</td>
          <td>
            <input v-model="dms.lat.deg" type="number" step="any">°
            <input v-model="dms.lat.min" type="number" step="any">'
            <input v-model="dms.lat.sec" type="number" step="0.05">
          </td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>
            <input v-model="dms.lon.deg" type="number" step="any">°
            <input v-model="dms.lon.min" type="number" step="any">'
            <input v-model="dms.lon.sec" type="number" step="0.05">
          </td>
        </tr>
      </table>
    </form>
    <form name="coords_degrees" v-show="deg.show">
      <table>
        <tr>
          <td>Latitude:</td>
          <td>
            <input v-model="deg.lat" type="number" step="any">° N
          </td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>
            <input v-model="deg.lon" type="number" step="any">° E
          </td>
        </tr>
      </table>
    </form>
    <form name="coords_lv95" v-show="lv95.show">
      <table>
        <tr>
          <td>X:</td>
          <td><input v-model="ESlider" type="range" min="0" max="100"></td>
          <td><input v-model="lv95.E" type="number" step="any"></td>
        </tr>
        <tr>
          <td>Y:</td>
          <td><input v-model="NSlider" type="range" min="0" max="100"></td>
          <td><input v-model="lv95.N" type="number" step="any"></td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
import {dms2deg, wgs2lv95, lv952wgs, deg2dms} from './coords.js';

export default {
  props: {
    lat: Number,
    lon: Number,
  },
  data() {
    const [N, E] = wgs2lv95(this.lat, this.lon);
    return {
      dms: {
        show: true,
        lat: deg2dms(this.lat),
        lon: deg2dms(this.lon)
      },
      deg: {
        show: false,
        lat: this.lat,
        lon: this.lon
      },
      lv95: {
        show: false,
        N: N,
        E: E,
        nMin: Number.MIN_VALUE,
        nMax: Number.MAX_VALUE,
        eMin: Number.MIN_VALUE,
        eMax: Number.MAX_VALUE,
      },
      NSlider: 50,
      ESlider: 50,
      coord: {
        lat: this.lat,
        lon: this.lon,
        latMin: Number.MIN_VALUE,
        latMax: Number.MAX_VALUE,
        lonMin: Number.MIN_VALUE,
        lonMax: Number.MAX_VALUE
      }
    }
  },
  methods: {
    setLatLon(lat, lon) {
      this.deg.lat = lat;
      this.deg.lon = lon;
    },
    setLv95(N, E) {
      this.lv95.N = N;
      this.lv95.E = E;
    },
    onSelect(value) {
      this.dms.show = false;
      this.deg.show = false;
      this.lv95.show = false;
      const lat = this.coord.lat, lon = this.coord.lon;
      switch(value) {
      case 'dms':
        this.dms.lat = deg2dms(lat);
        this.dms.lon = deg2dms(lon);
        break;
      case 'deg': [this.deg.lat, this.deg.lon] = [lat, lon]; break;
      case 'lv95': [this.lv95.N, this.lv95.E] = wgs2lv95(lat, lon); break;
      }
      this[value].show = true;
    }
  },
  emits: ['coord-changed'],
  watch: {
    coord: {
      handler() {
        const c = this.coord;
        const lv = wgs2lv95(c.lat, c.lon);
        const changeEvent = {wgs:{lat: c.lat, lon: c.lon}, lv95:{N:lv[0], E:lv[1]}};
        console.log('CoordsForm: coord changed: ', changeEvent);
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
      },
      deep: true
    },
    deg: {
      handler() {
        this.coord.lat = dms2deg(parseFloat(this.deg.lat));
        this.coord.lon = dms2deg(parseFloat(this.deg.lon));
      },
      deep: true
    },
    lv95: {
      handler() {
        [this.coord.lat, this.coord.lon] = lv952wgs(parseFloat(this.lv95.N), parseFloat(this.lv95.E));
      },
      deep: true
    },
    NSlider: {
      handler() {
        const min = this.lv95.nMin, max = this.lv95.nMax;
        const rangeN = this.NSlider;
        const value = parseFloat((min + (rangeN / 100 * (max - min))).toFixed(2));
        this.lv95.N = value;
        [this.coord.lat, this.coord.lon] = lv952wgs(this.lv95.N, this.lv95.E);
      }
    },
    ESlider: {
      handler() {
        const min = this.lv95.eMin, max = this.lv95.eMax;
        const rangeE = this.ESlider;
        const value = parseFloat((min + (rangeE / 100 * (max - min))).toFixed(2));
        this.lv95.E = value;
        [this.coord.lat, this.coord.lon] = lv952wgs(this.lv95.N, this.lv95.E);
      }
    }
  }
};
</script>
