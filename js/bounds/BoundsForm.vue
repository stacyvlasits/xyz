<template>
  <div class="bounds-forms">
    <h3>Min Coordindate</h3>
    <coords-form :coordinate="min" @coord-changed="onMin"></coords-form>
    <h3>Max Coordindate</h3>
    <coords-form :coordinate="max" @coord-changed="onMax"></coords-form>
  </div>
</template>
<script>
import CoordsForm from '../coords/CoordsForm.vue';
import {wgs2lv95} from '../coords/coords.js';
import {assertInRange} from '@pablo-mayrgundter/testing.js/testing.js';


export default {
  props: {
    min: Object,
    max: Object
  },
  components: {
    'coords-form': CoordsForm
  },
  data() {
    return {
      bounds: {
        min: {
          lat: null,
          lon: null
        },
        max: {
          lat: null,
          lon: null
        },
      }
    }
  },/*
  created() {
    console.log(`BoundsForm: min.lat: ${this.min.lat}, `
                + `min.lon: ${this.min.lon}, `
                + `max.lat: ${this.max.lat}, `
                + `max.lon: ${this.max.lon}`);
  },*/
  methods: {
    onMin(ev) {
      assertInRange(ev.lat, -360, 360);
      assertInRange(ev.lon, -360, 360);
      if (this.bounds.max.lat == null) {
        this.bounds.max.lat = this.max.lat;
        this.bounds.max.lon = this.max.lon;
      }
      this.bounds.min.lat = ev.lat;
      this.bounds.min.lon = ev.lon;
      //console.log(`bounds/BoundsForm.vue#onMin: `, ev, this.bounds);
      this.$emit('bounds-changed', this.bounds);
    },
    onMax(ev) {
      assertInRange(ev.lat, -360, 360);
      assertInRange(ev.lon, -360, 360);
      if (this.bounds.min.lat == null) {
        this.bounds.min.lat = this.min.lat;
        this.bounds.min.lon = this.min.lon;
      }
      this.bounds.max.lat = ev.lat;
      this.bounds.max.lon = ev.lon;
      //console.log('bounds/BoundsForm.vue#onMax: ', ev, this.bounds);
      this.$emit('bounds-changed', this.bounds);
    },
  },
  emits: ['bounds-changed'],
};
</script>
<style scoped>
.bounds-forms input {
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


.bounds-forms span {
    margin-right: 27px;
    padding-left: 3px;
}


.coord-form {
  margin-top: 15px;
}
</style>
