import * as Diurnal from '@pablo-mayrgundter/diurnal.js';
import Vue from 'vue';
import CoordsForm from './CoordsForm.vue';
import {
  deg2rad,
  dms2deg,
  wgs2lv95
} from './coords.js';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';

Diurnal.bind();
// TODO: make this an arg to bind
document.querySelector('#diurnal-controls').style.visibility = 'hidden';


const vm = new Vue({
  el: '#app',
  render: h => h(CoordsForm)
});
vm.$on('coord-changed', event => {
  centerMap(event.wgs[0], event.wgs[1]);
});


function $(id) {
  return document.getElementById(id);
}

let map, marker;


// Initialize and add the map
window.initMap = () => {
  const bern = { lat: 46.951082773, lng: 7.438632421 };
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
