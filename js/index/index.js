import * as Vue from 'vue';
import VueRouter from 'vue-router';
import * as Diurnal from '@pablo-mayrgundter/diurnal.js';
import * as Extract from '../extract/App.vue';
import * as Project from '../project/ProjectTools.vue';

import css from '../../public/index.css';


Diurnal.bind();


const NotFound = { template: '<div>Not Found</div>' };


const routes = {
  '/asdf': Project,
  '/b': Extract
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      const target = routes[this.currentRoute] || NotFound
      console.log('current route: ', this.currentRoute, target);
    }
  },

  render() {
    console.log('rendering: ', this.CurrentComponent);
    return Vue.h(this.CurrentComponent)
  }
}


const app = Vue.createApp(SimpleRouter);
app.mount('#app');
