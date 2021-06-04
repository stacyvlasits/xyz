<template>
<div class="coords-bounds-form">
  <a id="dlbtn" class="button" download="extract.xyz">Download</a>
  <h3>Center Point Coordinate</h3>
  <coords-form :coordinate="coordinate" @coord-changed="onLVCoord"></coords-form>
  <bounds-form :min="min" :max="max" @bounds-changed="onBounds"></bounds-form>
</div>
</template>
<script>
  import CoordsForm from '../coords/CoordsForm.vue';
  import BoundsForm from '../bounds/BoundsForm.vue';
  import {lv952wgs, wgs2lv95} from '../coords/coords.js';


  export default {
    props: {
      coordinate: Object,
      min: Object,
      max: Object
    },
    components: {
      CoordsForm,
      BoundsForm
    },
    methods: {
      setLatLon(lat, lon) {
        //console.log('App.vue#setLatLon', lat, lon);
        this.coordinate.lat = lat;
        this.coordinate.lon = lon;
        [this.coordinate.N, this.coordinate.E] = wgs2lv95(lat, lon)
      },
      setLv95(N, E) {
        //console.log('App.vue#setLv95', N, E);
        this.coordinate.N = N;
        this.coordinate.E = E;
        [this.coordinate.lat, this.coordinate.lon] = lv952wgs(N, E);
      },
      onBounds(arg) {
        //console.log('extract/App.vue#onBounds: ', arg.min.wgs.lat, arg.min.wgs.lon, arg.max.wgs.lat, arg.max.wgs.lon, );
        this.bounds = arg;
        this.min.lat = arg.min.wgs.lat;
        this.min.lon = arg.min.wgs.lon;
        this.max.lat = arg.max.wgs.lat;
        this.max.lon = arg.max.wgs.lon;
      },
      onLVCoord(ev) {
        console.log('extract/App.vue#onLVCoord: ', ev);
        const c = this.coordinate;
        [c.lat, c.lon, c.N, c.E] = [ev.wgs.lat, ev.wgs.lon, ev.lv95.N, ev.lv95.E];
        //console.log('App.vue#onLVCoord: ', c);
      }
    },
    watch: {
      coordinate: {
        handler() {
          //console.log('App.vue#watch.coordinate: emitting coord-bounds-change', this.coordinate, this.bounds);
          this.$emit('coord-bounds-change',
                     {coordinate: this.coordinate, bounds: this.bounds});
        },
        deep: true
      },
      min: {
        handler() {
          //console.log('App.vue#watch.min: emitting coord-bounds-change', this.coordinate, this.min, this.max);
          this.$emit('coord-bounds-change',
                     {coordinate: this.coordinate, min: this.min, max: this.max});
        },
        deep: true
      },
      max: {
        handler() {
          //console.log('App.vue#watch.bounds: emitting coord-bounds-change', this.coordinate, this.min, this.max);
          this.$emit('coord-bounds-change',
                     {coordinate: this.coordinate, min: this.min, max: this.max});
        },
        deep: true
      }
    }
  }
</script>
<style scoped>
.coords-bounds-form {
  margin: 1em 0;
}


.coords-bounds-form input {
  margin: 5px;
  padding: 5px;
}


.button {
  display: inline-block;
  text-decoration: none;
  background-color: #eee;
  color: lightgrey;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid lightgrey;
  border-bottom: 1px solid darkgrey;
  border-right: 1px solid darkgrey;
}


.button[href] {
  background-color: green;
  color: white;
}


select {
    padding: 5px;
}
</style>
