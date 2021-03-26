import * as Diurnal from '@pablo-mayrgundter/diurnal.js';
import Vue from 'vue';
import CoordsForm from './CoordsForm.vue';
import {
  deg2rad,
  dms2deg,
  wgs2lv95
} from './coords.js';


Diurnal.bind();
// TODO: make this an arg to bind
document.querySelector('#diurnal-controls').style.visibility = 'hidden';


const vm = new Vue({
  el: '#app',
  render: h => h(CoordsForm)
});
vm.$on('coord-changed', event => { centerMap(event.wgs[0], event.wgs[1]) });


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



function showOutput(lat, lon, N, E) {
  app.lv95N = N;
  app.lv95E = E;
  centerMap(lat, lon);
}


function initDegForm(degForm) {
  degForm.addEventListener('submit', event => {
    try {
      const lat = parseFloat(degForm.latDeg.value);
      const lon = parseFloat(degForm.lngDeg.value);
      const [N, E] = wgs2lv95(lat, lon);
      showOutput(lat, lon, N, E);
    } catch (e) {
      console.error(e);
    }
    event.preventDefault();
  });
}


// Dms: Degrees, minutes, seconds
function initDmsForm(dmsForm) {
  dmsForm.addEventListener('submit', event => {
    try {
      const lat = dms2deg(parseFloat(dmsForm.latDeg.value),
                          parseFloat(dmsForm.latMin.value),
                          parseFloat(dmsForm.latSec.value));
      const lon = dms2deg(parseFloat(dmsForm.lngDeg.value),
                          parseFloat(dmsForm.lngMin.value),
                          parseFloat(dmsForm.lngSec.value));
      const [N, E] = wgs2lv95(lat, lon);
      showOutput(lat, lon, N, E);
    } catch (e) {
      console.error(e);
    }
    event.preventDefault();
  });
}


function init() {
  const degForm = document.forms.coords_degrees;
  initDegForm(degForm);
  initDmsForm(document.forms.coords_dms);
  degForm.dispatchEvent(new Event('submit'));
}


//init();
