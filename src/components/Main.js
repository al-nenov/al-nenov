import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ProductsList from './product/ProductsList';
import ProductPage from './product/ProductPage';
import Login from './Login';
import Signup from './Signup';
import Cart from './cart/Cart';
import {Container} from 'react-bootstrap';


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
                <Route path="/dashboard">
                    <h2>{props.user}</h2>
                </Route>
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={Cart} />
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