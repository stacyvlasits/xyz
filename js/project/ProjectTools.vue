<template>
  Project Tools
  <button ref="dlBtn" href="" v-on:click="onClick">Download</button>
<!--  Crd lat: {{coordinate.lat}}, lon: {{coordinate.lon}}, N: {{coordinate.N}}, E: {{coordinate.E}}<br/>
  Min lat: {{min.lat}}, lon: {{min.lon}}, N: {{min.N}}, E: {{min.E}}<br/>
  Max lat: {{max.lat}}, lon: {{max.lon}}, N: {{max.N}}, E: {{max.E}}<br/> -->
</template>
<script>
import {ref, onMounted} from 'vue';
import {deg2dms} from '../coords/coords.js';

let dlUrl = null;
export default {
  props: {
    coordinate: Object,
    min: Object,
    max: Object
  },
  data() {
    return {}
  },
  setup() {
    const dlBtn = ref(null);
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(dlBtn.value) // <div>This is a root element</div>
    })
    return {
      dlBtn
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
  },
  methods: {
    validateInput() {
      const lat = deg2dms(this.coordinate.lat);
      const lon = deg2dms(this.coordinate.lon);
      const fileContent = `<?xml version="1.0" encoding="UTF-8"?>
<ProjectLocation>
  <Version val="1"/>
  <LatitudeCoord deg="${lat.deg}" min="${lat.min}" sec="${lat.sec}"/>
  <LatitudeNorth val="${this.coordinate.N}"/>
  <LongitudeCoord deg="${lon.deg}" min="${lon.min}" sec="${lon.sec}"/>
  <LongitudeEast val="${this.coordinate.E}"/>
  <LongLatUnit val="11"/>
  <TimeZoneHour val="1"/>
  <TimeZoneMinute val="0"/>
  <AltitudeMeter val="0"/>
  <AltitudeUnit val="1"/>
  <NorthDirection val="0"/>"
  <NorthAngleUnit val="0"/>
</ProjectLocation>`;
      const chk = Number.isFinite;
      if (!(chk(lat.deg) && chk(lat.min) && chk(lat.sec)
            && chk(lon.deg) && chk(lon.min) && chk(lon.sec))) {
        dlUrl = null;
        this.dlBtn.setAttribute('href', '');
        console.log('Invalid coords: ', fileContent);
        return;
      }
      const data = new Blob([fileContent], {type: 'text/xml;charset=utf-8'});
      const url = window.URL.createObjectURL(data);
      dlUrl = url;
    },
    onClick(ev) {
      console.log('ProjectTools#onClick', ev);
      const anchor = document.createElement('a');
      anchor.href = dlUrl;
      anchor.target = "_blank";
      anchor.download = "project.xml";
      anchor.click();
      //this.dlBtn.setAttribute('href', dlUrl);
      //window.URL.revokeObject(dlUrl);
    }
  }
}
</script>
