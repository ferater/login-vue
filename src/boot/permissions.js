import { Loading, QSpinnerGears } from 'quasar';
import cookie from '../api-services/cookie';
import utils from '../utils';

const whiteList = ['/login'];

const hideLoading = () => {
  setTimeout(() => {
    Loading.hide();
  }, 900);
};

const hasPermission = (route, permissions) => {
  if (route.meta.permissions) {
    const a = route.meta.permissions.filter((x) => permissions.includes(x));
    if (a.length >= 1) {
      return true;
    }
    return false;
  }
  return true;
};

export default ({ router, store /** , Vue */ }) => {
  Loading.hide();
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
    // start progress bar
    Loading.show({ spinner: QSpinnerGears });
    // set page title
    document.title = utils.getPageTitle(to.meta.title);
    // determine whether the user has logged in
    const isUserLogged = cookie.isLogged();
    const { permissions } = store.state.auth;
    if (isUserLogged) {
      if (to.name === 'login' || !hasPermission(to, permissions)) {
        next({ name: 'home' });
        hideLoading();
      } else {
        next();
        hideLoading();
      }
    } else if (whiteList.indexOf(to.matched[0] ? to.matched[0].path : '') !== -1) {
      // in the free login whitelist, go directly
      next();
      hideLoading();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      store.dispatch('auth/autoLogOut');
      next(`/login?redirect=${to.path}`);
      hideLoading();
    }
  });
  router.afterEach(() => {
    hideLoading();
  });
};
