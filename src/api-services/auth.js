import axios from 'axios';

export default {
  loginOrRegister(resource) {
    return axios({
      method: 'post',
      url: resource.url,
      data: resource.data,
    });
  },
  getAuthUser() {
    return axios({
      method: 'get',
      url: '/user',
    });
  },
  logOut() {
    return axios({
      method: 'post',
      url: '/logout',
    });
  },
};
