import {CART_TYPES} from '../actions/cartTypes';
const cart = [];


const cartReducer = function(state = cart, action) {
    switch (action.type) {
        case CART_TYPES.ADD_PRODUCT_TO_CART: {
            return [...action.payload]
        }
        case CART_TYPES.REMOVE_ITEM_FROM_CART: {
            return [...action.payload]
        }
        case CART_TYPES.EMPTY_CART: {
            return []
        }
        default: return state
    }
}

export {cartReducer}