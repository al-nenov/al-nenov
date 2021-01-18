import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import About from '../../pages/about/about-page.component'
import PrivateRoute from '../private-route/private-route.component'
import ProductsList from '../product/product-list.component'
import ProductPage from '../product/product-page.component'
import Login from '../../pages/login/login-page.component'
import Signup from '../../pages/signup/signup-page.component'
import CheckoutItems from '../checkout/checkout-items.component'
import Dashboard from '../user/dashboard-page.component'

const Main = () => {
    const user = useSelector((state) => state.userAuth.currentUser)
    return (
        <Container className="p-4">
            <Switch>
                <Route exact path="/" component={ProductsList} />
                <Route path="/about" component={About} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CheckoutItems} />
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <Route path="/login" component={Login}>
                    {user && <Redirect to="/" />}
                </Route>
                <Route path="/signup" component={Signup}>
                    {user && <Redirect to="/" />}
                </Route>
            </Switch>
        </Container>
    )
}

export default Main
