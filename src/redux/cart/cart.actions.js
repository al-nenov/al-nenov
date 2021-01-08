import { store } from '../../redux'
import { CART_TYPES } from './cart.types'
import { ORDER } from '../../services/orderService'
import { toast } from 'react-toastify'

function getCartItems() {
    return [...store.getState().cart]
}

export function addToCart(payload) {
    let cartItems = getCartItems()
    let product = { ...payload }
    let existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
        existingItem.qty += 1
    } else {
        product.qty = 1
        cartItems.push(product)
    }

    return function (dispatch) {
        dispatch({
            type: CART_TYPES.ADD_PRODUCT_TO_CART,
            payload: cartItems
        })
        toast(`${product.title} was added to your cart`)
    }
}

export function removeFromCart(id) {
    let cartItems = getCartItems()
    const reducedCart = cartItems.filter((item) => item.id !== id)

    return function (dispatch) {
        dispatch({
            type: CART_TYPES.REMOVE_ITEM_FROM_CART,
            payload: reducedCart
        })
        toast('Product was removed from your cart')
    }
}

export function emptyCart() {
    return function (dispatch) {
        dispatch({
            type: CART_TYPES.EMPTY_CART
        })
    }
}

export function completeOrder(items) {
    return async function (dispatch) {
        const res = await ORDER.COMPLETE_ORDER(items)
        if (res.status === 'Success') {
            dispatch({
                type: CART_TYPES.EMPTY_CART
            })
            toast('Thank You for shopping with us')
        }
    }
}
