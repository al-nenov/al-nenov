import React from 'react'
import { useSelector } from 'react-redux'
import OrdersList from '../orders/orders-list.component'
import FavoritesList from '../favorites/favorites-list.component'
import { Tabs, Tab } from 'react-bootstrap'

const Dashboard = () => {
    const user = useSelector((state) => state.userAuth.currentUser)

    return (
        <>
            <h1>Hello, {user.displayName || 'guest'}</h1>

            <Tabs defaultActiveKey="order" id="">
                <Tab eventKey={'order'} title="Orders">
                    <OrdersList />
                </Tab>
                <Tab eventKey={'favorites'} title="Favorites">
                    <FavoritesList />
                </Tab>
            </Tabs>
        </>
    )
}

export default Dashboard
