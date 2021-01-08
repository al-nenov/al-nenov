import React from 'react';
import {useSelector} from 'react-redux';
import OrdersList from '../orders/orders-tab.component';
import FavoritesList from '../favorites/favorites-list.component';
import {Tabs, Tab} from 'react-bootstrap';

function Dashboard() {
    const user = useSelector(state => state.userAuth);

    return (
        <>
            <h1>Hello, {user.user}</h1>

            <Tabs defaultActiveKey="order" id="">
                <Tab eventKey={"order"} title="Orders">
                    <OrdersList />
                </Tab>
                <Tab eventKey={"favorites"} title="Favorites">
                    <FavoritesList />
                </Tab>
            </Tabs>
        </>
    )
}

export default Dashboard