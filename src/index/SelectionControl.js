/**
 * Setup the input sliders and text fields with min/max bounds.
 */
export default class SelectionControl {
  constructor(xyzObject, sourceBounds, viewBounds, onZoomChangeCb) {
    this.xyzObject = xyzObject;
    this.onZoomChangeCb = onZoomChangeCb;
    const minX = sourceBounds.min.x;
    const minY = sourceBounds.min.y;
    const maxX = sourceBounds.max.x;
    const maxY = sourceBounds.max.y;
    const width = maxX - minX;
    const height = maxY - minY;
    const maxRadius = Math.max(width, height) / 2;
    // These max values must be >0 and a number.
    const radiusParams = {
      X: [minX, maxX],
      Y: [minY, maxY],
      Radius: [0, maxRadius]
    };
    this.setupForm('radius', radiusParams);

    const boxParams = {
      Xmin: [minX, maxX],
      Ymin: [minY, maxY],
      Xmax: [minX, maxX],
      Ymax: [minY, maxY]
    };
    this.setupForm('box', boxParams);
    this.userSelection = null;
  }


  processBounds(bounds, button) {
    let boxBounds = bounds;
    let isBoundsValid = false;
    if (bounds.hasOwnProperty('Radius')) {
      if (gte(bounds.X)
          && gte(bounds.Y)
          && Number.isFinite(bounds.Radius)
          && bounds.Radius > 0) {
        const x = parseFloat(bounds.X);
        const y = parseFloat(bounds.Y);
        const r = parseFloat(bounds.Radius);
        this.userSelection = {
          Xmin: bounds.X - r,
          Ymin: bounds.Y - r,
          Xmax: bounds.X + r,
          Ymax: bounds.Y + r
        };
        this.activateDownloadButton(button, bounds);
        isBoundsValid = true;
      } else {
        this.deactivateDownloadButton(button);
      }
    } else {
      if (gte(bounds.Xmin)
          && gte(bounds.Ymin)
          && gt(bounds.Xmax, bounds.Xmin)
          && gt(bounds.Ymax, bounds.Ymin)) {
        this.userSelection = bounds;
        this.activateDownloadButton(button, bounds);
        isBoundsValid = true;
      } else {
        this.deactivateDownloadButton(button);
      }
    }
    if (isBoundsValid) {
      requestAnimationFrame(() => {
          this.onZoomChangeCb(this.userSelection);
        });
    }
  }


  setupForm(formName, params) {
    const form = document.forms[formName];
    if (!form) {
      throw new Error(`Form '${form}' not found`);
    }
    const bounds = {};
    for (let propName in params) {
      bounds[propName] = params[propName][0];
    }
    const button = form.querySelector('.button');
    form.onSlider = (sliderElt, propName) => {
      const min = params[propName][0];
      const max = params[propName][1];
      const value = parseFloat((min + (sliderElt.value / 100 * (max - min))).toFixed(2));
      bounds[propName] = value;
      form[propName].value = value;
      this.processBounds(bounds, button);
    }
    form.onInput = (inputElt, propName) => {
      const min = params[propName][0];
      const max = params[propName][1];
      let inVal = parseFloat(clip(min, max, parseFloat(inputElt.value)));
      if (Number.isNaN(inVal)) {
        inputElt.value = '';
        inVal = 0;
      }
      bounds[propName] = inVal;
      form[propName + '-slider'].value = ((inVal - min) / (max - min) * 100).toFixed(2);
      this.processBounds(bounds, button);
    }
    const existingTable = form.querySelector('table');
    if (existingTable)
      existingTable.remove();
    const controlsTable = document.createElement('table');
    form.insertBefore(controlsTable, button);
    for (let propName in params) {
      const min = params[propName][0];
      const max = params[propName][1];
      const value = bounds[propName];
      const sliderValue = 0;
      controlsTable.innerHTML +=
        `<tr>
           <td>${propName}:</td>
           <td>
              <input type="range" min="0" max="100" name="${propName}-slider" value="${sliderValue}"
                  oninput="document.forms['${formName}'].onSlider(this, '${propName}')"/>
              <input name="${propName}" value="${value}"
                  oninput="document.forms['${formName}'].onInput(this, '${propName}')"/>
                               <span class="bounds">[&nbsp;${min}&nbsp;,&nbsp;${max}&nbsp;]</span>
           </td>
         </tr>`;
    }
  }


  activateDownloadButton(button, bounds) {
    button.onclick = () => {
      this.processBounds(bounds, button);
      const fileContent = this.xyzObject.extractSectionAsXYZ(this.userSelection);
      const data = new Blob([fileContent], {type: 'text/plain'});
      const url = window.URL.createObjectURL(data);
      button.href = url;
    }
    button.setAttribute('href', '');
  }


  deactivateDownloadButton(button) {
    button.onclick = null;
    button.removeAttribute('href');
  }
}


function clip(min, max, val) {
  return Math.min(Math.max(val, min), max);
}


/** @return true Iff a is a finite number and a > b. */
function gt(a, b) {
  if (b === undefined) {
    b = 0;
  }
  return Number.isFinite(a) && a > b;
}


/** @return true Iff a is a finite number and a > b. */
function gte(a, b) {
  if (b === undefined) {
    b = 0;
  }
  return Number.isFinite(a) && a >= b;
}
