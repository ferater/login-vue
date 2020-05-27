/*
export function someMutation (state) {
}
*/

export function setAtuhUser(state, payload) {
  state.authUser = payload;
}

export function setRoles(state, payload) {
  state.roles = payload;
}

export function setPermissions(state, payload) {
  state.permissions = payload;
}
