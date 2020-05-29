/*
export function someMutation (state) {
}
*/

export function setAtuhUser(state, authUser) {
  state.authUser = authUser;
}

export function setRoles(state, roles) {
  state.roles = roles;
}

export function setPermissions(state, permissions) {
  state.permissions = permissions;
}
