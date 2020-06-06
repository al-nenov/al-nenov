import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';
import ProductsList from './ProductsList';
import ProductPage from './ProductPage';
import Login from './Login';


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
            <Route path="/login" component={props.loggedIn ? ProductsList : Login } />
        </Switch>
    )
}

function mapStateToProps(globalState) {
    return {
        loggedIn: globalState.userAuth.loggedIn
    }
}
export default connect(mapStateToProps, {})(Main);