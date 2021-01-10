import { CART_TYPES } from '../cart/cart.types'
import { addToCart, removeFromCart } from './cart.utils'

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_TYPES.ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        }
        case CART_TYPES.REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: removeFromCart(state.cartItems, action.payload)
            }
        }
        case CART_TYPES.EMPTY_CART: {
            return {
                ...state,
                cartItems: []
            }
        }
        default:
            return state
    }
}

export { cartReducer }
