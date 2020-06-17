import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button} from 'react-bootstrap';
import ProductPrice from '../product/ProductPrice';
import {completeOrder} from '../../actions/cartActions';
import {useDispatch} from 'react-redux';

function CartTotals(props) {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(completeOrder(props.items))
    }

    return (
        <Card>
            <h5>Cart Totals:</h5>
            <p>Total : <ProductPrice price={props.total} /></p>
            <Button onClick={handleClick}>Complete order</Button>
        </Card>
    )
}

CartTotals.propTypes = {
    items: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}

export default CartTotals