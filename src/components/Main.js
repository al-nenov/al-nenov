import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import PrivateRoute from './PrivateRoute';
import ProductsList from './product/ProductsList';
import ProductPage from './product/ProductPage';
import Login from './Login';
import Signup from './Signup';
import Cart from './cart/Cart';
import Dashboard from './user/Dashboard';


function Main(props) {
    const user = useSelector(state => state.userAuth);
    const loggedIn = user.loggedIn;
    return (
        <Container className="p-4">
            <Switch>
                <Route exact path="/" component ={ProductsList} />
                <Route path="/about">
                    <h2>About</h2>
                </Route>
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={Cart} />
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <Route path="/login" component={Login}>
                    {loggedIn && <Redirect to="/" />}
                </Route>
                <Route path="/signup" component={Signup }>
                    {loggedIn && <Redirect to="/" />}
                </Route>
            </Switch>
        </Container>
    )
}

export default Main;