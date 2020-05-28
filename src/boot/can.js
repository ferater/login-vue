import can from '../utils/can';

export default async ({ Vue }) => {
  Vue.prototype.$can = can;
};
