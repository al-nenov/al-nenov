import React from 'react'
import PropTypes from 'prop-types'
import OrderItem from './order-item.component'
import { Table } from 'react-bootstrap'
import ProductPrice from '../product/product-price.component'

function Order(props) {
    let orderTotal = 0
    let orderItems = props.order.items.map((item) => {
        orderTotal += item.qty * item.price
        return <OrderItem key={item.id} item={item} />
    })
    return (
        <div>
            <h5>Order # {props.order.id}</h5>
            <Table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                    {orderItems}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}></td>
                        <td> Order Total: </td>
                        <td>
                            <ProductPrice price={orderTotal} />
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

Order.propTypes = {
    order: PropTypes.object.isRequired
}

export default Order
