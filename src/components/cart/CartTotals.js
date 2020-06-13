import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ProductPrice from '../product/ProductPrice';

function CartTotals(props) {
    return (
        <Card>
            <h5>Cart Totals:</h5>
            <p>Total : <ProductPrice price={props.total} /></p>
            <Button>Complete order</Button>
        </Card>
    )
}

export default CartTotals