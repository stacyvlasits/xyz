import {
  deg2rad,
  dms2deg,
  wgs2lv95
} from './coords.js';


function $(id) {
  return document.getElementById(id);
}


function init() {

  const degreesForm = document.forms.coords_degrees;
  degreesForm.addEventListener('submit', event => {
    try {
      const lat = parseFloat(degreesForm.latDeg.value);
      const lng = parseFloat(degreesForm.lngDeg.value);
      const [x, y] = wgs2lv95(lat, lng);
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
      const lng = dms2deg(parseFloat(dmsForm.lngDeg.value),
                          parseFloat(dmsForm.lngMin.value),
                          parseFloat(dmsForm.lngSec.value));
      const [x, y] = wgs2lv95(lat, lng);
    } catch (e) {
      console.error(e);
    }
    event.preventDefault();
  });
}

init();
