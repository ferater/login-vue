import { Notify } from 'quasar';

const setNotifyProps = (notify) => {
  let { color } = notify.data.message;
  let icon = 'announcement';
  if (color === undefined) {
    const a = notify.status.toString().charAt(0);
    switch (a) {
      case 2:
        color = 'green';
        icon = 'announcement';
        break;
      default:
        color = 'deep-purple-7';
        icon = 'report_problem';
        break;
    }
  }
  // console.log('notify, (setColor)', { color, icon });
  return { color, icon };
};

const state = {};
const getters = {};
const mutations = {};
const actions = {

  notifyMe(context, notify) {
    const { color, icon } = setNotifyProps(notify);
    Notify.create({
      progress: true,
      message: notify.data.message.text ? notify.data.message.text : notify.data.message,
      color,
      icon,
      classes: 'glossy',
      actions: [
        { label: 'Kapat', color: 'yellow', handler: () => { /* ... */ } },
      ],
    });
    // console.log('notifyMe, (Actions)', notify);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
