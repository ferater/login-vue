import auth from '../../api-services/auth';
import crsf from '../../api-services/crsf';

/**
 * Login or Register
 * @param {object} context
 * @param {object} resource
 */
export async function loginOrRegister(context, resource) {
  await crsf.getCookie()
    .then(() => {
      auth.loginOrRegister(resource)
        .then((response) => {
          console.log('loginOrRegister, (Actions, Then) :', response);
          context.dispatch('notify/notifyMe', response, { root: true });
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            // context.dispatch('notify/notifyMe', error.response, { root: true });
            // context.dispatch('setFormErrors', error.response.data.errors);
            // console.log('loginOrRegister, (Actions, Catch) :', error.response);
          }
        });
    })
    .catch((error) => {
      if (!error.response) {
        console.info('getCookie, (Actions, Catch) : Network Hatası!');
      }
    });
}

/**
 * Sunucudan dönen hataları forma yazdırır
 * @param {Object} context
 * @param {Array} errors
 */
export function setFormErrors(context, errors) {
  context.commit('setFormErrors', errors);
}
