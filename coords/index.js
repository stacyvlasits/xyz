import {
  deg2rad,
  dms2deg,
  wgs2lv95
} from './coords.js';


function $(id) {
  return document.getElementById(id);
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


function showOutput(N, E) {
  const outputElt = document.querySelector('#output');
  outputElt.innerText = `${N} N ${E} E`;
}


function init() {


  const degreesForm = document.forms.coords_degrees;
  degreesForm.addEventListener('submit', event => {
    try {
      const lat = parseFloat(degreesForm.latDeg.value);
      const lng = parseFloat(degreesForm.lngDeg.value);
      const [N, E] = wgs2lv95(lat, lng);
      showOutput(N, E);
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
      const [N, E] = wgs2lv95(lat, lng);
      showOutput(N, E);
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
