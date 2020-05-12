/* eslint import/namespace: [2, { allowComputed: true }] */
import Vue from 'vue';
import * as filters from '../filters';


// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
