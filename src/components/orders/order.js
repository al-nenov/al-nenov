import React from 'react';
import OrderItem from './OrderItem';
import {Table} from 'react-bootstrap';
import ProductPrice from '../product/ProductPrice';

function Order(props) {
    let orderTotal = 0;
    let orderItems = props.order.items.map(item => {
        orderTotal += item.qty * item.price;
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
                        <td><ProductPrice price={orderTotal} /></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

export default Order;
