import { Loading, QSpinnerGears } from 'quasar';
import cookie from '../api-services/cookie';
import getPageTitle from '../utils/getpagetitle';

const whiteList = ['/login'];

const hideLoading = () => {
  setTimeout(() => {
    Loading.hide();
  }, 900);
};

export default ({ router, store /** , Vue */ }) => {
  Loading.hide();
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
    // start progress bar
    Loading.show({ spinner: QSpinnerGears });
    // set page title
    document.title = getPageTitle(to.meta.title);

    // determine whether the user has logged in
    const isUserLogged = cookie.isLogged();

    if (isUserLogged) {
      if (to.name === 'login') {
        console.log('Zaten içerdesin!');
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
