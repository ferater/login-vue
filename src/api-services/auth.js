import axios from 'axios';

export default {
  loginOrRegister(resource) {
    return axios({
      method: 'post',
      url: resource.url,
      data: resource.data,
    });
  },
};
