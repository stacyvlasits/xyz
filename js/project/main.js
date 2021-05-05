import * as Vue from 'vue';
import {wgs2lv95} from '../coords/coords.js';
import BoundsForm from '../bounds/BoundsForm.vue';
import CoordsForm from '../coords/CoordsForm.vue';
import ProjectTools from './ProjectTools.vue';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';


let comp;

const bern = { lat: 46.951082773, lng: 7.438632421 };
[bern.N, bern.E] = wgs2lv95(bern.lat, bern.lng);

const app = Vue.createApp({
  components: {
    'coords-form': CoordsForm,
    'bounds-form': BoundsForm,
    'project-tools': ProjectTools
  },
  data() {
    return {
      coordinate: {
        lat: bern.lat,
        lon: bern.lng,
        N: bern.N,
        E: bern.E,
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
        lat: bern.lat,
        lon: bern.lng,
        N: bern.N,
        E: bern.E,
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
      pri_altitude: 0,
      pri_northing: 0
    }
  },
  created() {
    //console.log(`created:`, this.coordinate);
    comp = this;
    window.comp = comp;
  },
  methods: {
    onCoordChanged(ev) {
      this.pri_coordinate.lat = ev.wgs.lat;
      this.pri_coordinate.lon = ev.wgs.lon;
      this.pri_coordinate.N = ev.lv95.N;
      this.pri_coordinate.E = ev.lv95.E;
      //console.log('main.js#onCoordChanged', this.pri_coordinate);
      centerMap(ev.wgs.lat, ev.wgs.lon);
    },
    onBounds(ev) {
      this.pri_min.lat = ev.min.wgs.lat;
      this.pri_min.lon = ev.min.wgs.lon;
      this.pri_min.N = ev.min.lv95.N;
      this.pri_min.E = ev.min.lv95.E;
      this.pri_max.lat = ev.max.wgs.lat;
      this.pri_max.lon = ev.max.wgs.lon;
      this.pri_max.N = ev.max.lv95.N;
      this.pri_max.E = ev.max.lv95.E;
      //console.log('main.js#onBounds', this.pri_min, this.pri_max);
    }
  }
});
app.mount('#app');


let map, marker;

// Initialize and add the map
window.initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: bern,
  });
  marker = new google.maps.Marker({
    position: bern,
    map: map,
  });
};


function centerMap(lat, lon) {
  // Avoid race at startup
  if (marker && map) {
    marker.setPosition(new google.maps.LatLng(lat, lon));
    map.panTo(new google.maps.LatLng(lat, lon));
  }
}
