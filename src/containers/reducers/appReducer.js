import {
    SET_USER,
    SET_ORG,
    LOGIN,
    LOGOUT,
} from '../actions/appActions';

const initalState = {
    user: null,
    org: null,
    CAData: null,
    key: null,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case SET_ORG:
            return {
                ...state,
                org: action.org,
            };   
        case LOGIN:
            return {
                ...state,
                CAData: action.CAData,
                key: action.key,
            };
        case LOGOUT:
            return initalState;
        default:
            return state
    }
}
   