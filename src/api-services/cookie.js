import axios from 'axios';
import { Cookies } from 'quasar';

const TokenKey = 'isLogged';

export default {
  /**
   * Get Crsf cookie from Laravel
   */
  getXsrfCookie() {
    const token = Cookies.get('XSRF-TOKEN');
    if (token) {
      return new Promise((resolve) => {
        resolve(token);
        console.log('getCookie, (Actions, Then) : Csrf Çerez zaten var');
      });
    }
    return axios({
      method: 'get',
      url: '/sanctum/csrf-cookie',
    }).then(() => {
      console.log('getCookie, (Actions, Then) : Csrf Çerez alındı');
    });
  },

  isLogged() {
    return Cookies.get(TokenKey) === 1;
  },

  setLogged(isLogged) {
    return Cookies.set(TokenKey, isLogged);
  },

  removeToken() {
    return Cookies.remove(TokenKey);
  },
};
