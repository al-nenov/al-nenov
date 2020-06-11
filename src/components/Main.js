import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ProductsList from './product/ProductsList';
import ProductPage from './product/ProductPage';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';


function Main(props) {
    return (
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
                {props.loggedIn && <Redirect to="/" />}
            </Route>
            <Route path="/signup" component={Signup }>
                {props.loggedIn && <Redirect to="/" />}
            </Route>
        </Switch>
    )
}

function mapStateToProps(globalState) {
    return {
        loggedIn: globalState.userAuth.loggedIn
    }
}
export default connect(mapStateToProps, {})(Main);