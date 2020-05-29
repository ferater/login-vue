import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'
import app from './module-app';
import auth from './module-auth';
import notify from './module-notify';
import validation from './module-validation';

// eslint-disable-next-line import/no-mutable-exports
let store = null;

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example,
      app,
      auth,
      notify,
      validation,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  store = Store;

  return Store;
}

export { store };
