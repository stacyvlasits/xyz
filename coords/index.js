import {
  deg2rad,
  ellipsoidToLV95
} from './coords.js';


function $(id) {
  return document.getElementById(id);
}


function init() {
  const form = document.forms.coords;
  form.addEventListener('submit', event => {
    const lat = deg2rad(
        parseFloat(form.latDeg.value),
        parseFloat(form.latMin.value),
        parseFloat(form.latSec.value));
    const lng = deg2rad(
        parseFloat(form.lngDeg.value),
        parseFloat(form.lngMin.value),
        parseFloat(form.lngSec.value));
    const xy = ellipsoidToLV95(lat, lng);
    console.log(lat, lng, xy);
    event.preventDefault();
  });
}

init();
