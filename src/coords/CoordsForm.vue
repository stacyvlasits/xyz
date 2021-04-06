<template>
<div>
  <p>
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
    initCoord: Object,
    initLv: Object
  },
  data() {
    return {
      dms: {
        show: true,
        lat: {
          deg: this.initCoord.latDeg || 2,
          min: this.initCoord.latMin || 0,
          sec: this.initCoord.latSec || 0
        },
        lon: {
          deg: this.initCoord.lonDeg || 0,
          min: this.initCoord.lonMin || 0,
          sec: this.initCoord.lonSec || 0
        }
      },
      deg: {
        show: false,
        lat: this.initCoord.lat || 0,
        lon: this.initCoord.lon || 0
      },
      lv95: {
        show: false,
        N: this.initLv.N || 1200000,
        E: this.initLv.E || 2600000,
        nMin: this.initLv.nMin || Number.MIN_VALUE,
        nMax: this.initLv.nMax || Number.MAX_VALUE,
        eMin: this.initLv.eMin || Number.MIN_VALUE,
        eMax: this.initLv.eMax || Number.MAX_VALUE,
      },
      NSlider: 50,
      ESlider: 50,
      coord: {
        lat: this.initCoord.lat || 0,
        lon: this.initCoord.lon || 0,
        latMin: Number.MIN_VALUE,
        latMax: Number.MAX_VALUE,
        lonMin: Number.MIN_VALUE,
        lonMax: Number.MAX_VALUE
      },
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
        const dms = this.dms;
        [dms.lat.deg, dms.lat.min, dms.lat.sec] = deg2dms(lat);
        [dms.lon.deg, dms.lon.min, dms.lon.sec] = deg2dms(lon);
        break;
      case 'deg': [this.deg.lat, this.deg.lon] = [lat, lon]; break;
      case 'lv95': [this.lv95.N, this.lv95.E] = wgs2lv95(lat, lon); break;
      }
      this[value].show = true;
    }
  },
  watch: {
    coord: {
      handler() {
        const c = this.coord;
        const lv = wgs2lv95(c.lat, c.lon);
        const changeEvent = {wgs:{lat: c.lat, lon: c.lon}, lv95:{N:lv[0], E:lv[1]}};
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
