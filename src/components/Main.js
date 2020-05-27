import React from 'react';
import {Switch, Route} from "react-router-dom";
import ProductsList from './ProductsList';

function Main() {
    return (
        <Switch>
            <Route exact path="/">
                <ProductsList />
            </Route>
            <Route path="/about">
                <h2>About</h2>
            </Route>
            <Route path="/dashboard">
                <h2>Dashboard</h2>
            </Route>
        </Switch>
    )
}
export default Main;