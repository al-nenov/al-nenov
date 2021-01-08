import {CART_TYPES} from './cart.types';

export function addToCart(cartItems) {
    return function(dispatch) {
        dispatch({
            type: CART_TYPES.ADD_PRODUCT_TO_CART,
            payload: cartItems
        })
    }
}

export function removeFromCart(itemId) {
    return function(dispatch) {
        dispatch({
            type: CART_TYPES.REMOVE_ITEM_FROM_CART,
            payload: itemId 
        })
    }
}


export function emptyCart() {
    return function(dispatch) {
        dispatch({
            type: CART_TYPES.EMPTY_CART
        })
    }
}