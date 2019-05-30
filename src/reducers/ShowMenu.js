import * as types from '../constants/ActionTypes';

const myReducer = (state = false, action) => {
    if(action.type === types.OPEN_MENU)
        state = !state;
    return state;
}

export default myReducer;