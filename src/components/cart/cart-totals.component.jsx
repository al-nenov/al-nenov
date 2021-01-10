import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import ProductPrice from '../product/product-price.component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartTotals = ({ total }) => {
    const dispatch = useDispatch()
    const loggedIn = useSelector((state) => state.userAuth.currentUser)

    const handleClick = () => {
        // TODO habdle complete order
    }

    return (
        <Card className="p-4">
            <h5>Cart Totals:</h5>
            <p>
                Total : <ProductPrice price={total} />
            </p>
            {!loggedIn && (
                <div>
                    <p className="text-warning">You need to be logged in to complete an order</p>
                    <Link to="/login">Login here</Link>
                </div>
            )}
            <Button variant="secondary" onClick={handleClick} disabled={!loggedIn}>
                Complete order
            </Button>
        </Card>
    )
}

CartTotals.propTypes = {
    items: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}

export default CartTotals
