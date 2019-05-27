import { combineReducers } from 'redux';
import isShowNav from './isShowNav';

const myReducer = combineReducers({
    isShowNav,
});

export default myReducer;