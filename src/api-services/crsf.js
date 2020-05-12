import axios from 'axios';

export default {
  /**
   * Get Crsf cookie from Laravel
   */
  getCookie() {
    return axios({
      method: 'get',
      url: '/sanctum/csrf-cookie',
    });
  },
};
