// import something here
import axios from 'axios';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ store }) => {
  // something to do
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          store.dispatch('auth/logOut');
          return Promise.reject(error);
        }
        if (error.response) {
          if (error.response.status === 422) {
            store.dispatch('validation/setFormErrors', error.response.data.errors);
            return Promise.reject(error);
          }
        }
      } else {
        console.log('Ağ hatası oluştu', error);
        store.dispatch('notify/notifyMe', { data: { message: { color: 'yellow-7', text: 'Sunucu bağlantısı kurulamadı, Lütfen internet ayarlarınızı kontrol edin!' } } });
      }
      return Promise.reject(error);
    },
  );
};
