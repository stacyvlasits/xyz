import Controls from './Controls.js';
import View from './View.js';
import XYZObject from './XYZObject.js';


const controls = new Controls();
const view = new View();
const xyzObj = new XYZObject('test.xyz', obj => {
    //const xyzObj = new XYZObject('sample.xyz', obj => {
    view.displayXYZObject(obj);
    controls.setXYZObject(xyzObj);
    controls.init(obj.shape.bounds, zoom => {
        view.focus(zoom);
      });
  });

function handleHash() {
  let hash = location.hash.substr(1);
  //console.log('hash arg:', hash)
  //loader.loadPath(hash, onLoadCb, onDoneCb);
}
window.addEventListener('hashchange', handleHash);
handleHash();
