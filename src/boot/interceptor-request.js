// import something here
import axios from 'axios';


// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ store }) => {
  // something to do
  axios.interceptors.request.use((config) => {
    store.dispatch('validation/clearFormErrors');
    store.dispatch('app/setIsBtnLoading', true);
    return config;
  });
};
