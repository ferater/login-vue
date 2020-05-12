import { Notify } from 'quasar';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  notifyMe(context, notify) {
    let color = 'red';
    switch (notify.status) {
      case 200:
      case 201:
      case 204:
        color = 'green';
        break;

      default:
        break;
    }
    Notify.create({
      progress: true,
      message: notify.data.message,
      color,
      avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
      classes: 'glossy',
      actions: [
        { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } },
      ],
    });
    console.log('notifyMe, (Actions)', notify);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
