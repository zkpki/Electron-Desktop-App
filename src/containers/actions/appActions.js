export const SET_USER = 'SET_USER';
export const SET_ORG = 'SET_ORG';
 
export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
};

export function setOrg(org) {
  return {
    type: SET_ORG,
    org
  }
}