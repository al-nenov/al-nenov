import React from 'react';
import OrderItem from './orderItem';

function Order(props) {
    console.log(props.order)
    let orderItems = props.order.items.map(item => <OrderItem item={item} />)
    return (
        <div>
            <p>Order # {props.order.id}</p>
            {orderItems}
        </div>
    )
}

export default Order;
