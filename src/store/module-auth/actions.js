import crsf from '../../api-services/crsf';
import auth from '../../api-services/auth';

/**
 * Login or Register
 * @param {object} context
 * @param {object} resource
 */
export async function loginOrRegister(context, resource) {
  await crsf.getCookie();
  console.info('getCookie, (Actions, Then) : Çerez Alındı');
  return auth.loginOrRegister(resource)
    .then((response) => {
      console.log('loginOrRegister, (Actions, Then) :', response);
      this.$router.push({ name: 'home' });
    })
    .catch((error) => {
      if (error.response.status === 422) {
        context.commit('setFormErrors', error.response.data.errors);
        console.info('loginOrRegister, (Actions, Catch) :', error.response);
      }
    });
}
