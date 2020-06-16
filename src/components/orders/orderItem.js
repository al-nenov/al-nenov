import React from 'react';

function OrderItem(props) {
    console.log(props)
    return (
        <div>
            <p>{props.item.image}</p>
            <p>{props.item.price}</p>
            <p>{props.item.qty}</p>
            <p>{props.item.title}</p>
        </div>
    )
}

export default OrderItem
