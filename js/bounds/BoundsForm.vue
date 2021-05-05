<template>
  <div class="bounds-forms">
    <h3>Min</h3>
    <coords-form :coordinate="min" @coord-changed="onMin"></coords-form>
    <h3>Max</h3>
    <coords-form :coordinate="max" @coord-changed="onMax"></coords-form>
  </div>
</template>
<script>
import CoordsForm from '../coords/CoordsForm.vue';


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
          wgs: {
            lat: null,
            lon: null
          },
          lv95: {
            N: null,
            E: null
          }
        },
        max: {
          wgs: {
            lat: null,
            lon: null
          },
          lv95: {
            N: null,
            E: null
          }
        },
      }
    }
  },
  methods: {
    onMin(ev) {
      this.bounds.min.wgs.lat = ev.wgs.lat;
      this.bounds.min.wgs.lon = ev.wgs.lon;
      this.bounds.min.lv95.N = ev.lv95.N;
      this.bounds.min.lv95.E = ev.lv95.E;
      console.log(`BoundsForm#onMin: ${this.bounds.min.wgs.lat}`, this.bounds);
      this.$emit('bounds-changed', this.bounds);
    },
    onMax(ev) {
      this.bounds.max.wgs.lat = ev.wgs.lat;
      this.bounds.max.wgs.lon = ev.wgs.lon;
      this.bounds.max.lv95.N = ev.lv95.N;
      this.bounds.max.lv95.E = ev.lv95.E;
      console.log('BoundsForm#onMax: ', this.bounds);
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
