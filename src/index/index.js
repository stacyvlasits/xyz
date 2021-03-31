import Vue from 'vue';
import App from './App.vue';
import * as Index from './index.js';

new Vue({
  el: '#app',
  render: h => h(App)
});

Index.init();
