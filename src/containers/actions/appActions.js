export const SET_USER = 'SET_USER';
export const SET_ORG = 'SET_ORG';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  }
};

export function setOrg(org) {
  return {
    type: SET_ORG,
    org,
  }
}

export function login(CAData, key) {
  return {
    type: LOGIN,
    CAData,
    key,
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}