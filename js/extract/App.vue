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
      onBounds(arg) {
        //console.log('extract/App.vue#onBounds: ', arg.min.lat, arg.min.lon, arg.max.lat, arg.max.lon);
        this.bounds = arg;
        this.min.lat = arg.min.lat;
        this.min.lon = arg.min.lon;
        this.max.lat = arg.max.lat;
        this.max.lon = arg.max.lon;
      },
      onLVCoord(ev) {
        console.log('extract/App.vue#onLVCoord: ', ev);
        const c = this.coordinate;
        [c.lat, c.lon] = [ev.lat, ev.lon];
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
