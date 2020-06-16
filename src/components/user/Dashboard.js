import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ORDER} from '../../services/orderService';
import Order from '../orders/order';

function Dashboard() {
    const user = useSelector(state => state.userAuth);
    const [ordersList, setOrdersList] = useState([]);
    const orders = ordersList.map((order) => {
        return <Order order={order}/>
    })
    useEffect(() => {
        setOrdersList(ORDER.ORDERS_LIST());        
    }, []) 
    return (
        <>
        <h1>{user.user}</h1>
        <h3>Your orders</h3>
        {orders}
        </>
    )
}

export default Dashboard