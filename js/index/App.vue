<template>
<div>
  <coords-form :lat="lat" :lon="lon" @coord-changed="onLVCoord"></coords-form>
  <form>
    <table>
      <tr>
        <td>Radius:</td>
        <td><input v-model="radius" type="range" min="0" max="100" step="0.5"></td>
        <td><input v-model="radius" type="number" step="0.5"></td>
      </tr>
    </table>
    <a id="dlbtn" class="button" download="extract.xyz">Download</a>
  </form>
</div>
</template>
<script>
  import CoordsForm from '../coords/CoordsForm.vue';
  import {wgs2lv95} from '../coords/coords.js';
  export default {
    props: {
      latitude: Number,
      longitude: Number,
    },
    data() {
      const [N, E] = wgs2lv95(this.latitude, this.longitude);
      return {
        lat: this.latitude,
        lon: this.longitude,
        radius: 0,
        coord: {
          lat: this.latitude,
          lon: this.longitude,
          N: N,
          E: E
        }
      }
    },
    components: {
      'coords-form': CoordsForm
    },
    methods: {
      setLatLon(lat, lon) {
        this.$children[0].setLatLon(lat, lon);
      },
      setLv95(N, E) {
        this.$children[0].setLv95(N, E);
      },
      setRadius(r) {
        this.radius = r;
        console.log('App.vue#setRadius', r);
      },
      onLVCoord(ev) {
        const c = this.coord;
        [c.lat, c.lon, c.N, c.E] = [ev.wgs.lat, ev.wgs.lon, ev.lv95.N, ev.lv95.E];
        console.log('App.vue#onLVCoord: ', c);
      }
    },
    watch: {
      coord: {
        handler() {
          console.log('App.vue#watch.coord: ', this.coord);
          this.$emit('coord-radius-change',
                     {coord: this.coord, radius: parseFloat(this.radius)});
        },
        deep: true
      },
      radius: {
        handler() {
          console.log('App.vue#watch.radius: ', this.radius);
          this.$emit('coord-radius-change',
                     {coord: this.coord, radius: parseFloat(this.radius)});
        }
      }
    }
  }
</script>
