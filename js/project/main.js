import * as Vue from 'vue';
import BoundsForm from '../bounds/BoundsForm.vue';
import CoordsForm from '../coords/CoordsForm.vue';
import ProjectTools from './ProjectTools.vue';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';


let comp;

//let mainObject = reactive();

const app = Vue.createApp({
  components: {
    'coords-form': CoordsForm,
    'bounds-form': BoundsForm,
    'project-tools': ProjectTools
  },
  data() {
    return {
      coordinate: {
        lat: 0,
        lon: 0,
        N: 0,
        E: 0,
      },
      min: {
        lat: 0,
        lon: 0,
        N: 0,
        E: 0,
      },
      max: {
        lat: 0,
        lon: 0,
        N: 0,
        E: 0,
      },
      pri_coordinate: {
        lat: 0,
        lon: 0,
        N: 0,
        E: 0,
      },
      pri_min: {
        lat: 0,
        lon: 0,
        N: 0,
        E: 0,
      },
      pri_max: {
        lat: 0,
        lon: 0,
        N: 0,
        E: 0,
      },
    }
  },
  created() {
    console.log(`created:`, this.coordinate);
    comp = this;
    window.comp = comp;
  },
  methods: {
    onLVCoord(ev) {
      this.pri_coordinate.lat = ev.wgs.lat;
      this.pri_coordinate.lon = ev.wgs.lon;
      this.pri_coordinate.N = ev.lv95.N;
      this.pri_coordinate.E = ev.lv95.E;
      console.log('main.js#onLVCoord', this.pri_coordinate);
    },
    onBounds(ev) {
      //if (true) return;
      this.pri_min.lat = ev.min.wgs.lat;
      this.pri_min.lon = ev.min.wgs.lon;
      this.pri_min.N = ev.min.lv95.N;
      this.pri_min.E = ev.min.lv95.E;
      this.pri_max.lat = ev.max.wgs.lat;
      this.pri_max.lon = ev.max.wgs.lon;
      this.pri_max.N = ev.max.lv95.N;
      this.pri_max.E = ev.max.lv95.E;
      console.log('main.js#onBounds', this.pri_min, this.pri_max);
    }
  }
});
app.mount('#app');
