import * as Vue from 'vue';
import * as Diurnal from '@pablo-mayrgundter/diurnal.js';
import {XYZLoader} from 'three/examples/jsm/loaders/XYZLoader.js';

import App from './App.vue';
import FileLoaderControl from './FileLoaderControl.js';
import SelectionControl from './SelectionControl.js';
import View from './View.js';
import XYZObject from './XYZObject.js';

// TODO(https://github.com/buildrs/xyz/issues/1): CSS loading is weird.
import css from '../../public/index.css';


Diurnal.bind();

let sc;
const view = new View();
const TEST = Vue.ref({a:1});
const bern = { lat: 46.951082773, lng: 7.438632421 };
const app = Vue.createApp({
  components: {
    'here': App
  },
  data() {
    return {
      latitude: bern.lat,
      longitude: bern.lng,
      radius: 0,
      test: TEST
    }
  },
  methods: {
    init(N, E, R) {
      const c = this.$children[0];
      c.setLv95(N, E);
      c.setRadius(10);
      console.log('index.js#init', N, E, R);
    },
    onCoordRadiusChange(event) {
      const c = event.coord, r = event.radius;
      console.log(`coord-radius-change: wgs(${c.lat},${c.lon}) lv(${c.N},${c.E}) r(${r})`);
      const zoom = {
        Xmin: c.E - r,
        Xmax: c.E + r,
        Ymin: c.N - r,
        Ymax: c.N + r,
      };
      console.log('zoom', zoom);
      view.focus(zoom);
      sc.processBounds(zoom, document.getElementById('dlbtn'));
    },
  },
  watch: {
    test: {
      handler() {
        console.log('test: ', this.test);
      },
      deep: true
    }
  }
});
app.mount('#app');


const display = geometry => {
  const obj = new XYZObject(geometry);
  view.displayXYZObject(obj);
  const bounds = obj.shape.sourceBounds;
  const N = bounds.min.y + (bounds.max.y - bounds.min.y) / 2;
  const E = bounds.min.x + (bounds.max.x - bounds.min.x) / 2;
  console.log('index.js#display...');
  TEST.a = 2;
  sc = new SelectionControl(obj, obj.shape.sourceBounds, obj.shape.viewBounds, zoom => {
    view.focus(zoom);
  });
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
