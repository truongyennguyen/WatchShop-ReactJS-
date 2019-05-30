import { combineReducers } from 'redux';
import ShowMenu from './ShowMenu';
import ShowCart from './ShowCart'

const myReducer = combineReducers({
    ShowMenu,
    ShowCart
});

export default myReducer;