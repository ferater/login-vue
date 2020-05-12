import axios from 'axios';
import { Cookies } from 'quasar';

export default {
  /**
   * Get Crsf cookie from Laravel
   */
  getCookie() {
    const token = Cookies.get('XSRF-TOKEN');
    if (token) {
      return new Promise((resolve) => {
        resolve(token);
        console.log('getCookie, (Actions, Then) : Csrf Çerez zaten var');
      });
    }
    return axios({
      method: 'get',
      url: '/api/sanctum/csrf-cookie',
    }).then(() => {
      console.log('getCookie, (Actions, Then) : Csrf Çerez alındı');
    });
  },
};
