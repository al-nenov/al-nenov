import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button} from 'react-bootstrap';
import ProductPrice from '../product/ProductPrice';
import {completeOrder} from '../../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';

function CartTotals(props) {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.userAuth.loggedIn);

    function handleClick() {
        loggedIn && dispatch(completeOrder(props.items))
    }

    return (
        <Card>
            <h5>Cart Totals:</h5>
            <p>Total : <ProductPrice price={props.total} /></p>
            {!loggedIn && 
                <div>
                    <p className="text-warning">You need to be logged in to complete an order</p>
                    <a href="/login">Login here</a>
                </div>
            }
            <Button onClick={handleClick} disabled={!loggedIn}>Complete order</Button>
        </Card>
    )
}

CartTotals.propTypes = {
    items: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}

export default CartTotals