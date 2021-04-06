<template>
<div>
  <coords-form v-on:coord-changed="onLVCoord($event)"
               v-bind:init-coord="initCoord"
               v-bind:init-lv="initLv"></coords-form>
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
  export default {
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
      },
      onLVCoord(ev) {
        const c = this.coord;
        [c.lat, c.lon, c.N, c.E] = [ev.wgs.lat, ev.wgs.lon, ev.lv95.N, ev.lv95.E];
      }
    },
    data() {
      return {
        initCoord: {
          lat: 46.951082773,
          lon: 7.438632421,
          latDeg: 46,
          latMin: 57,
          latSec: 3.89798,
          lonDeg: 7,
          lonMin: 26,
          lonSec: 19.07672,
        },
        initLv: {
          N: 1200000,
          E: 2600000,
          nMin: 1242525.25,
          nMax: 1242594.75,
          eMin: 2683475.25,
          eMax: 2683539.75
        },
        coord: {
          lat: 46.951082773,
          lon: 7.438632421,
          N: 1200000,
          E: 2600000
        },
        radius: 10
      }
    },
    watch: {
      coord: {
        handler() {
          this.$root.$emit('coord-radius-change',
                           {coord: this.coord, radius: parseFloat(this.radius)});
        },
        deep: true
      },
      radius: {
        handler() {
          this.$root.$emit('coord-radius-change',
                           {coord: this.coord, radius: parseFloat(this.radius)});
        }
      }
    }
  }
</script>
