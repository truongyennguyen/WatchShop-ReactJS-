import * as types from '../constants/ActionTypes';

const myReducer = (state = false, action) => {
    if(action.type === types.OPEN_TOGGLE_NAV)
        state = !state;
    return state;
}

export default myReducer;