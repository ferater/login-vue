// import something here
import axios from 'axios';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ store }) => {
  // something to do
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 422) {
        store.dispatch('validation/setFormErrors', error.response.data.errors);
        // store.dispatch('notify/notifyMe', error.response);
        // console.log('interceptors :', error.response);
        return Promise.reject(error);
      } if (error.response.status === 401) {
        store.dispatch('auth/logOut');
        return Promise.reject(error);
      }
      return Promise.reject(error);
    },
  );
};
