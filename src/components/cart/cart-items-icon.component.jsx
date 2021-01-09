import React from 'react'
import { useSelector } from 'react-redux'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const CartItemsIcon = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const cartItemsCounter = cartItems.reduce((accumulator, item) => {
        return accumulator + item.qty
    }, 0)
    return (
        <Badge badgeContent={cartItemsCounter} color="secondary">
            <ShoppingCartIcon />
        </Badge>
    )
}

export default CartItemsIcon
