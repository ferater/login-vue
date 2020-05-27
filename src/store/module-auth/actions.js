import auth from '../../api-services/auth';
import cookie from '../../api-services/cookie';

/**
 * Login or Register
 * @param {object} context
 * @param {object} resource
 */
export async function loginOrRegister(context, resource) {
  await cookie
    .getXsrfCookie();
  return new Promise((resolve, reject) => {
    auth.loginOrRegister(resource)
      .then((response) => {
        cookie.setLogged(1);
        context.dispatch('getAuthUser');
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getAuthUser(context) {
  await auth.getAuthUser().then((response) => {
    context.commit('setAtuhUser', response.data);
    context.commit('setRoles', response.data.roles);
    context.commit('setPermissions', response.data.permissions);
    console.log('getAuthUser (Actions, Then):', response.data);
  });
}

export async function autoLogOut(context) {
  await auth.logOut().then((response) => {
    console.log('autoLogOut: ', response);
    context.commit('setAtuhUser', {});
    cookie.removeToken('isLogged');
  });
}


export async function logOut(context) {
  await auth.logOut().then((response) => {
    console.log(response);
    context.commit('setAtuhUser', {});
    cookie.removeToken('isLogged');
    this.$router.push({ name: 'login' });
  });
}
