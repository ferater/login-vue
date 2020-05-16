import auth from '../../api-services/auth';
import cookie from '../../api-services/cookie';

/**
 * Login or Register
 * @param {object} context
 * @param {object} resource
 */
export async function loginOrRegister(context, resource) {
  await cookie.getXsrfCookie()
    .then(() => {
      auth.loginOrRegister(resource)
        .then((response) => {
          cookie.setLogged(1);
          console.log('loginOrRegister, (Actions, Then) :', response);
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            console.log('loginOrRegister, (Actions, Catch) :', error.response);
          }
        });
    })
    .catch((error) => {
      if (!error.response) {
        console.info('getCookie, (Actions, Catch) : Network Hatası!');
      }
    });
}

export async function getAuthUser(context) {
  await auth.getAuthUser()
    .then((response) => {
      context.commit('setAtuhUser', response.data);
    });
}


export async function logOut() {
  await auth.logOut()
    .then((response) => {
      console.log(response);
      cookie.removeToken('isLogged');
      this.$router.push({ name: 'login' });
    });
}
