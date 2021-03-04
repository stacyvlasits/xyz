import * as Diurnal from '../lib/diurnal.js/diurnal.js';
import {
  deg2rad,
  dms2deg,
  wgs2lv95
} from './coords.js';


Diurnal.bind();
document.querySelector('#diurnal-controls').style.visibility = 'hidden';


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



function selectInput(value, degreesForm, dmsForm) {
  switch(value) {
  case 'dms':
    degreesForm.style.display = 'none';
    dmsForm.style.display = 'block';
    break;
  case 'deg':
    degreesForm.style.display = 'block';
    dmsForm.style.display = 'none';
  }
}


function showOutput(lat, lon, N, E) {
  const outputElt = document.querySelector('#output');
  outputElt.innerText = `${N} N ${E} E`;
  centerMap(lat, lon);
}


function init() {


  const degreesForm = document.forms.coords_degrees;
  degreesForm.addEventListener('submit', event => {
    try {
      const lat = parseFloat(degreesForm.latDeg.value);
      const lon = parseFloat(degreesForm.lngDeg.value);
      const [N, E] = wgs2lv95(lat, lon);
      showOutput(lat, lon, N, E);
    } catch (e) {
      console.error(e);
    }
    event.preventDefault();
  });


  // DMS: Degrees, minutes, seconds
  const dmsForm = document.forms.coords_dms;
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

  const inputSelector = document.querySelector('select[name=input_format]');
  inputSelector.addEventListener('change', () => {
      selectInput(inputSelector.value, degreesForm, dmsForm);
    });

  degreesForm.dispatchEvent(new Event('submit'));
}


init();
