import {
    SET_USER,
    SET_ORG,
} from '../actions/appActions';

const initalState = {
    user: null,
    org: null
};

export default (state = initalState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case SET_ORG:
            return {
                ...state,
                org: action.org,
            }    
        default:
            return state
    }
}
   