<template>
  Project Tools
  <button v-on:click="onClick">Download</button>
  Crd lat: {{coordinate.lat}}, lon: {{coordinate.lon}}, N: {{coordinate.N}}, E: {{coordinate.E}}<br/>
  Min lat: {{min.lat}}, lon: {{min.lon}}, N: {{min.N}}, E: {{min.E}}<br/>
  Max lat: {{max.lat}}, lon: {{max.lon}}, N: {{max.N}}, E: {{max.E}}<br/>
</template>
<script>
export default {
  props: {
    coordinate: Object,
    min: Object,
    max: Object
  },
  data() {
    return {}
  },
  methods: {
    onClick(ev) {
      console.log('ProjectTools#onClick', ev);
    }
  }
}
</script>
