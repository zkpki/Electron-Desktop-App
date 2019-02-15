const initalState = {
    user: null,
    org: null
};

export default (state = initalState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }
        case 'SET_ORG':
            return {
                ...state,
                org: action.payload,
            }    
        default:
            return state
    }
}
   