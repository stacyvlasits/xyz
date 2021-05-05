<template>
<h2>ArchiCAD Project</h2>
  Initial project file
<button ref="dlBtn" v-on:click="onClick">Download</button><br/>
<p/>Preview:
<!--  Crd lat: {{coordinate.lat}}, lon: {{coordinate.lon}}, N: {{coordinate.N}}, E: {{coordinate.E}}<br/>
  Min lat: {{min.lat}}, lon: {{min.lon}}, N: {{min.N}}, E: {{min.E}}<br/>
  Max lat: {{max.lat}}, lon: {{max.lon}}, N: {{max.N}}, E: {{max.E}}<br/>
  Altitude: {{altitude}},
  Northing: {{northing}}-->
  <div ref="xmlDisplay"></div>
</template>
<script>
import {ref} from 'vue';
import {deg2dms} from '../coords/coords.js';

let dlUrl = null;
export default {
  props: {
    coordinate: Object,
    min: Object,
    max: Object,
    altitude: Number,
    northing: Number
  },
  data() {
    return {}
  },
  setup() {
    const dlBtn = ref(null);
    const xmlDisplay = ref(null);
    return {
      dlBtn, xmlDisplay
    }
  },
  watch: {
    coordinate: {
      handler() {
        this.validateInput();
      },
      deep: true
    },
    min: {
      handler() {
        this.validateInput();
      },
      deep: true
    },
    max: {
      handler() {
        this.validateInput();
      },
      deep: true
    },
    altitude: {
      handler() {
        this.validateInput();
      },
      deep: true
    },
    northing: {
      handler() {
        this.validateInput();
      },
      deep: true
    },
  },
  methods: {
    validateInput() {
      const lat = deg2dms(this.coordinate.lat);
      const lon = deg2dms(this.coordinate.lon);
      const fileContent = `<?xml version="1.0" encoding="UTF-8"?>
<ProjectLocation>
  <Version val="1"/>
  <LatitudeCoord deg="${lat.deg}" min="${lat.min}" sec="${lat.sec.toFixed(5)}"/>
  <LatitudeNorth val="${this.coordinate.N}"/>
  <LongitudeCoord deg="${lon.deg}" min="${lon.min}" sec="${lon.sec.toFixed(5)}"/>
  <LongitudeEast val="${this.coordinate.E}"/>
  <LongLatUnit val="11"/>
  <TimeZoneHour val="1"/>
  <TimeZoneMinute val="0"/>
  <AltitudeMeter val="${this.altitude}"/>
  <AltitudeUnit val="1"/>
  <NorthDirection val="${this.northing}"/>
  <NorthAngleUnit val="0"/>
</ProjectLocation>`;
      const chk = Number.isFinite;
      if (!(chk(lat.deg) && chk(lat.min) && chk(lat.sec)
            && chk(lon.deg) && chk(lon.min) && chk(lon.sec))) {
        console.log('Invalid coords: ', fileContent);
        dlUrl = null;
        return;
      }
      this.xmlDisplay.innerHTML = '<pre>' +
        (fileContent.replaceAll('<', '&lt;').replaceAll('>', '&gt;'))
      + '</pre>';
      const data = new Blob([fileContent], {type: 'text/xml;charset=utf-8'});
      const url = window.URL.createObjectURL(data);
      dlUrl = url;
    },
    onClick(ev) {
      //console.log('ProjectTools#onClick', ev);
      const anchor = document.createElement('a');
      anchor.href = dlUrl;
      anchor.target = '_blank';
      anchor.download = 'project.xml';
      anchor.click();
      //window.URL.revokeObjectURL(dlUrl);
    }
  }
}
</script>
