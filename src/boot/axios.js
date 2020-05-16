import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.timeout = 5000;


Vue.prototype.$axios = axios;
