// import something here
import axios from 'axios';
import cookie from '../api-services/cookie';

const isUserLogged = cookie.isLogged();
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ store }) => {
  // something to do
  axios.interceptors.request.use((config) => {
    if (!isUserLogged) {
      store.dispatch('auth/logOut');
    }
    store.dispatch('validation/clearFormErrors');
    return config;
  });
};
