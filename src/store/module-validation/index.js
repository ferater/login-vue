const state = {
  formErrors: {},
};
const mutations = {
  // eslint-disable-next-line no-shadow
  setFormErrors(state, payload) {
    state.formErrors = payload;
  },

};
const actions = {
  /**
 * Sunucudan dönen hataları form input alanına yazdırır
 * @param {Object} context
 * @param {Array} errors
 */
  setFormErrors(context, errors) {
    context.commit('setFormErrors', errors);
  },
  /**
 * Sunucudan dönen hataları form input alanına yazdırır
 * @param {Object} context
 * @param {Array} errors
 */
  clearFormErrors(context) {
    context.commit('setFormErrors', []);
  },

};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
