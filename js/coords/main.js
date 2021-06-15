import * as Vue from 'vue';
import * as Diurnal from '@pablo-mayrgundter/diurnal.js';
import CoordsForm from './CoordsForm.vue';
import {
  deg2rad,
  dms2deg,
  wgs2lv95,
  System
} from './coords.js';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';

Diurnal.bind();
// TODO: make this an arg to bind
document.querySelector('#diurnal-controls').style.visibility = 'hidden';


const bern1 = { lat: 46.951082773, lon: 7.438632421, system: System.WGS84 };
const bern2 = { lat: 1200000, lon: 2600000, system: System.LV95 };
const center = bern1;
let displayCoord, gCoord;
const app = Vue.createApp({
  data() {
    return {
      coordinate: center
    }
  },
  components: {
    'coords-form': CoordsForm
  },
  methods: {
    onCoordChanged(event) {
      displayCoord = vm.$refs.coords_form.getCoord();
      gCoord = {lat: displayCoord.lat, lng: displayCoord.lon};
      centerMap(gCoord.lat, gCoord.lon);
    }
  }
});

// TODO: not sure to get the processed coord besides this.
const vm = app.mount('#app');
displayCoord = vm.$refs.coords_form.getCoord();
// TODO: GMaps uses "lng" for longitude.
gCoord = {lat: displayCoord.lat, lng: displayCoord.lon};

function $(id) {
  return document.getElementById(id);
}


// Initialize and add the map
let map, marker;
window.initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: gCoord
  });
  marker = new google.maps.Marker({
    map: map,
    position:  gCoord
  });
};


function centerMap(lat, lon) {
  // Avoid race at startup
  if (marker && map) {
    marker.setPosition(new google.maps.LatLng(gCoord.lat, gCoord.lng));
    map.panTo(new google.maps.LatLng(gCoord.lat, gCoord.lng));
  }
}
