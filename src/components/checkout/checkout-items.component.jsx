import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { emptyCart } from '../../redux/cart/cart.actions'
import CheckoutTotals from './checkout-totals.component'
import CheckoutItem from './checkout-item.component'
import { Table, Button, Row, Col } from 'react-bootstrap'

const CheckoutItems = () => {
    const [cartTotal, setCartTotal] = useState(0)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cartItems)

    useEffect(() => {
        let total = 0
        cart.forEach((item) => {
            total += item.price * item.qty
        })
        setCartTotal(total)
    }, [cart])

    if (!cart.length) {
        return <Redirect to="/" />
    }

    const handleEmptyCart = () => {
        dispatch(emptyCart())
    }

    const cartItems = cart.map((item) => {
        return <CheckoutItem key={item.id} item={item} />
    })

    return (
        <>
            <h3 className="py-3">Checkout</h3>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>{cartItems}</tbody>
            </Table>

            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={handleEmptyCart}>
                        Empty cart
                    </Button>
                </Col>
                <Col>
                    <CheckoutTotals total={cartTotal} items={cart} />
                </Col>
            </Row>
        </>
    )
}

export default CheckoutItems
