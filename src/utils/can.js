import { store } from '../store';


const can = (permission) => {
  const { permissions } = store.state.auth;
  if (permission.length >= 1 && permissions && permissions.length >= 1) {
    const a = permission.filter((x) => permissions.includes(x));
    if (a.length >= 1) {
      return true;
    }
    return false;
  }
  return false;
};

export default can;
