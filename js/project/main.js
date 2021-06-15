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
console.log('permalink in project/main.js: ', Permalink);
const center = {
  lat: Permalink.lat || bern.lat,
  lon: Permalink.lon || bern.lon,
  system: Permalink.system || bern.system
};

function clone(obj) {
  return Object.assign({}, obj);
}

let displayCoord, gCoord;
let firstTime = true;
const app = Vue.createApp({
  components: {
    'coords-form': CoordsForm,
    'bounds-form': BoundsForm,
    'project-tools': ProjectTools
  },
  data() {
    return {
      coordinate: clone(center),
      min: clone(center),
      max: clone(center),
      pri_coordinate: clone(center),
      pri_min: clone(center),
      pri_max: clone(center),
      pri_altitude: 0,
      pri_northing: 0
    }
  },
  methods: {
    onCoordChanged(ev) {
      //console.log('project/main.js#onCoordChanged', ev.lat, ev.lon);
      displayCoord = vm.$refs.coords_form.getCoord();
      this.pri_coordinate.lat = ev.lat;
      this.pri_coordinate.lon = ev.lon;
      if (displayCoord.originalCoordinate) {
        this.pri_coordinate.originalCoordinate = displayCoord.originalCoordinate;
      }
      gCoord = {lat: displayCoord.lat, lng: displayCoord.lon};
      centerMap(gCoord.lat, gCoord.lng);
      //if (firstTime) {
        this.min.lat = ev.lat;
        this.min.lon = ev.lon;
        this.max.lat = ev.lat;
        this.max.lon = ev.lon;
        this.pri_min.lat = ev.lat;
        this.pri_min.lon = ev.lon;
        this.pri_max.lat = ev.lat;
        this.pri_max.lon = ev.lon;
    //}
    },
    onBounds(ev) {
      //firstTime = false;
      //console.log('project/main.js#onBounds', ev);
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
      const boxCoords = [
        { lat: this.pri_min.lat, lon: this.pri_min.lon },
        { lat: this.pri_min.lat, lon: this.pri_max.lon },
        { lat: this.pri_max.lat, lon: this.pri_max.lon },
        { lat: this.pri_max.lat, lon: this.pri_min.lon },
        { lat: this.pri_min.lat, lon: this.pri_min.lon },
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
          north: this.pri_max.lat,
          south: this.pri_min.lat,
          east: this.pri_max.lon,
          west: this.pri_min.lon,
        }
      });
      boundsRect.setMap(map);
      //console.log(map, boundsRect);
      //console.log('project/main.js#onBounds message received', this.pri_min, this.pri_max);
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
};


function centerMap(lat, lon) {
  // Avoid race at startup
  //console.log('centerMap: ', lat, lon);
  if (marker && map) {
    marker.setPosition(new google.maps.LatLng(lat, lon));
    map.panTo(new google.maps.LatLng(lat, lon));
  }
}
