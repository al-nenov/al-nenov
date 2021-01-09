import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartItemsIcon = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const cartItemsCounter = cartItems.reduce((accumulator, item) => {
        return accumulator + item.qty
    }, 0)
    return (
        <>
            <FontAwesomeIcon icon="shopping-basket" />
            {cartItemsCounter ? (
                <span className="cart-items_counter">{cartItemsCounter}</span>
            ) : null}
        </>
    )
}

export default CartItemsIcon
