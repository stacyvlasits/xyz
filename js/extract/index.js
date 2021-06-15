import * as Vue from 'vue';
import * as Diurnal from '@pablo-mayrgundter/diurnal.js';
import Permalink from '../permalink.js';
import Fullscreen from '@pablo-mayrgundter/fullscreen.js';
import {XYZLoader} from 'three/examples/jsm/loaders/XYZLoader.js';

import App from './App.vue';
import FileLoaderControl from './FileLoaderControl.js';
import SelectionControl from './SelectionControl.js';
import View from './View.js';
import XYZObject from './XYZObject.js';

// TODO get rid of this
import {lv952wgs, wgs2lv95, System} from '../coords/coords.js';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';


Diurnal.bind();
new Fullscreen(document.getElementById('view'));

console.log('permalink in extract/index: ', Permalink);

let sc;
const view = new View();
let comp;
const app = Vue.createApp({
  components: {
    'extract-tool': App,
  },
  data() {
    const d = {
      coordinate: {
        lat: Permalink.lat,
        lon: Permalink.lon,
        system: System.WGS84,
        N: Permalink.lat, // todo: convert
        E: Permalink.lon,
      },
      min: {
        lat: Permalink.min_lat,
        lon: Permalink.min_lon,
        system: System.WGS84
      },
      max: {
        lat: Permalink.max_lat,
        lon: Permalink.max_lon,
        system: System.WGS84
      }
    };
    //console.log('extract/index.js#data:', d);
    return d;
  },
  created() {
    //console.log(`created: ${this.coordinate}`);
    comp = this;
    window.comp = comp;
  },
  methods: {
    setCoord(N, E, R) {
      //console.log('extract/index.js#setCoord', this.coordinate, this.min, this.max);
      /*
      this.coordinate.N = N;
      this.coordinate.E = E;
      [this.coordinate.lat, this.coordinate.lon] = lv952wgs(N, E);
      */
      console.log('index.js#init', this.coordinate, this.min, this.max);
      this.onCoordBounds({coordinate: this.coordinate, min: this.min, max: this.max});
    },
    onCoordBounds(event) {
      const min = event.min, max = event.max;
      const lv95min = wgs2lv95(min.lat, min.lon);
      const lv95max = wgs2lv95(max.lat, max.lon);
      console.log(`coord-bounds-change: `, lv95min, lv95max);
      const zoom = {
        Xmin: lv95min[1],
        Xmax: lv95max[1],
        Ymin: lv95min[0],
        Ymax: lv95max[0],
      };
      console.log('extract/index.js:calling zoom: ', zoom);
      view.focus(zoom);
      sc.processBounds(zoom, document.getElementById('dlbtn'));
    },
  },
  watch: {
    coord: {
      handler() {
        console.log('extract/index.js#coord handler', this.coordinate);
      },
      deep: true
    },
  }
});
app.mount('#app');


const display = geometry => {
  const obj = new XYZObject(geometry);
  view.displayXYZObject(obj);
  const bounds = obj.shape.sourceBounds;
  sc = new SelectionControl(obj, obj.shape.sourceBounds, obj.shape.viewBounds, zoom => {
    //view.focus(zoom);
  });
  if (comp) {
    const N = bounds.min.y + (bounds.max.y - bounds.min.y) / 2;
    const E = bounds.min.x + (bounds.max.x - bounds.min.x) / 2;
    //console.log(comp, bounds, N, E);
    comp.setCoord(N, E, 1);
  } else {
    //console.error('comp not yet defined');
  }
};


const selectElt = document.querySelector("select[name='sources']");
selectElt.addEventListener('change', () => {
    new XYZLoader().load(selectElt.value, display);
});
new XYZLoader().load(selectElt.value, display);

const fileLoaderElt = document.getElementById('fileLoader');
const fileCtrl = new FileLoaderControl(fileLoaderElt, loadedXyz => {
    display(new XYZLoader().parse(loadedXyz));
  });


function handleHash() {
  let hash = location.hash.substr(1);
}
window.addEventListener('hashchange', handleHash);
handleHash();
