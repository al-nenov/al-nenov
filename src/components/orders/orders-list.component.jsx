import React from 'react'
import { ORDER } from '../../services/orderService'
import OrderItem from './order-item.component'

function OrdersList() {
    const ordersList = ORDER.ORDERS_LIST()

    const orders = ordersList.map((order) => {
        return <OrderItem key={order.id} order={order} />
    })

    return (
        <>
            <h3 className="py-3">Your orders</h3>
            {orders}
        </>
    )
}

export default OrdersList
