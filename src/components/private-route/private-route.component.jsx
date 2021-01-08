import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({ children, ...rest }) {
    const user = useSelector((state) => state.userAuth)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.loggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
