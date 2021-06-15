import * as Vue from 'vue';
import Permalink from '../permalink.js';
import {wgs2lv95, System} from '../coords/coords.js';
import BoundsForm from '../bounds/BoundsForm.vue';
import CoordsForm from '../coords/CoordsForm.vue';
import ProjectTools from './ProjectTools.vue';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';


let map, marker, boundsRect;

const bern = { lat: 46.951082773, lon: 7.438632421, system: System.WGS84 };
//[bern.N, bern.E] = wgs2lv95(bern.lat, bern.lon);
//const bern = { lat: 1200000, lon: 2600000, system: System.LV95 };
//console.log('permalink in project/main.js: ', Permalink);
const center = {
  lat: Permalink.lat || bern.lat,
  lon: Permalink.lon || bern.lon,
  system: Permalink.system || bern.system
};

function clone(obj) {
  return Object.assign({}, obj);
}

let displayCoord, gCoord;
const app = Vue.createApp({
  components: {
    'coords-form': CoordsForm,
    'bounds-form': BoundsForm,
    'project-tools': ProjectTools
  },
  data() {
    return {
      coordinate: clone(center),
      min: {
        lat: Permalink.min_lat || bern.lat,
        lon: Permalink.min_lon || bern.lon,
        system: center.system
      },
      max: {
        lat: Permalink.max_lat || bern.lat,
        lon: Permalink.max_lon || bern.lon,
        system: center.system
      },
      pri_coordinate: clone(center),
      pri_min: {
        lat: Permalink.min_lat || bern.lat,
        lon: Permalink.min_lon || bern.lon,
      },
      pri_max: {
        lat: Permalink.max_lat || bern.lat,
        lon: Permalink.max_lon || bern.lon,
      },
      pri_altitude: 0,
      pri_northing: 0
    }
  },/*
  created() {
    console.log(`project/main.js: min.lat: ${this.min.lat}, `
                + `min.lon: ${this.min.lon}, `
                + `max.lat: ${this.max.lat}, `
                + `max.lon: ${this.max.lon}, `
                + `pri_min.lat: ${this.pri_min.lat}, `
                + `pri_min.lon: ${this.pri_min.lon}, `
                + `pri_max.lat: ${this.pri_max.lat}, `
                + `pri_max.lon: ${this.pri_max.lon}`);
  },*/
  methods: {
    getBounds() {
      return {min: this.pri_min, max: this.pri_max};
    },
    onCoordChanged(ev) {
      //console.error('project/main.js#onCoordChanged', ev.lat, ev.lon);
      displayCoord = vm.$refs.coords_form.getCoord();
      this.pri_coordinate.lat = ev.lat;
      this.pri_coordinate.lon = ev.lon;
      if (displayCoord.originalCoordinate) {
        this.pri_coordinate.originalCoordinate = displayCoord.originalCoordinate;
      }
      gCoord = {lat: displayCoord.lat, lng: displayCoord.lon};
      centerMap(gCoord.lat, gCoord.lng);
    },
    onBounds(ev) {
      //console.error('project/main.js#onBounds', ev);
      this.pri_min.lat = ev.min.lat;
      this.pri_min.lon = ev.min.lon;
      this.pri_max.lat = ev.max.lat;
      this.pri_max.lon = ev.max.lon;
      /*
      console.log(`min_lat: ${ev.min.lat}, min_lon: ${ev.min.lon}, max_lat: ${ev.max.lat}, max_lon: ${ev.max.lon}`);
      console.log(`pri_min.lat: ${this.pri_min.lat}, `
                  + `pri_min.lon: ${this.pri_min.lon}, `
                  + `pri_max.lat: ${this.pri_max.lat}, `
                  + `pri_max.lon: ${this.pri_max.lon}`);
      */
      drawBoundingBox(this.getBounds());
    }
  }
});

const vm = app.mount('#app');
displayCoord = vm.$refs.coords_form.getCoord();
// TODO: GMaps uses "lng" for longitude.
gCoord = {lat: displayCoord.lat, lng: displayCoord.lon};


// Initialize and add the map
window.initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    // TODO: GMaps uses "lng" for longitude.
    center: gCoord
  });
  marker = new google.maps.Marker({
    map: map,
    position: gCoord
  });
  drawBoundingBox(vm.getBounds());
};


function centerMap(lat, lon) {
  // Avoid race at startup
  //console.log('centerMap: ', lat, lon);
  if (marker && map) {
    marker.setPosition(new google.maps.LatLng(lat, lon));
    map.panTo(new google.maps.LatLng(lat, lon));
  }
}


function drawBoundingBox(bounds) {
  const [min, max] = [bounds.min, bounds.max];
  const boxCoords = [
    { lat: min.lat, lon: min.lon },
    { lat: min.lat, lon: max.lon },
    { lat: max.lat, lon: max.lon },
    { lat: max.lat, lon: min.lon },
    { lat: min.lat, lon: min.lon },
  ];
  if (boundsRect) {
    boundsRect.setMap(null);
  }
  boundsRect = new google.maps.Rectangle({
    paths: boxCoords,
    strokeColor: "#000000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map,
    bounds: {
      north: max.lat,
      south: min.lat,
      east: max.lon,
      west: min.lon,
    }
  });
  boundsRect.setMap(map);
  //console.log(map, boundsRect);
  //console.log('project/main.js#onBounds message received', min, max);
}
