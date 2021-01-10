import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './order-item.component'

const OrdersList = () => {
    const ordersList = useSelector((state) => state.orders)

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
