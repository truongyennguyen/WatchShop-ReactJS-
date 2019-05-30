import * as types from './../constants/ActionTypes';

export const ShowMenu = () => {
    return {
        type: types.OPEN_MENU
    }
}

export const ShowCart = () => {
    return {
        type: types.OPEN_CART
    }

}