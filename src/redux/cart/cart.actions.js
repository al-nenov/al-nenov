import { CART_TYPES } from './cart.types'

export const addToCart = (cartItems) => ({
    type: CART_TYPES.ADD_PRODUCT_TO_CART,
    payload: cartItems
})

export const removeFromCart = (itemId) => ({
    type: CART_TYPES.REMOVE_ITEM_FROM_CART,
    payload: itemId
})

export const emptyCart = () => ({
    type: CART_TYPES.EMPTY_CART
})
