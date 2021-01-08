import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    const cartItems = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(logOut())
    }

    const log_Out = (
        <Nav.Link className="nav-link" onClick={() => handleClick()}>
            Log Out
        </Nav.Link>
    )
    const log_In = (
        <NavLink className="nav-link" to="/login">
            Login
        </NavLink>
    )
    const cartItemsCounter = cartItems.length > 0 && (
        <span className="cart-items_counter">{cartItems.length}</span>
    )

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand>
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav>
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </Nav>
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/dashboard">
                            My profile
                        </NavLink>
                    </Nav>
                    <Nav className="justify-content-end">
                        <NavLink className="nav-link cart-items mr-2" to="/cart">
                            <FontAwesomeIcon icon="shopping-basket" />
                            {cartItemsCounter}
                        </NavLink>
                        {auth.loggedIn && log_Out}
                        {auth.loggedIn ? (
                            <Navbar.Text>
                                Signed in as: <Link to="/dashboard">{auth.user}</Link>
                            </Navbar.Text>
                        ) : (
                            log_In
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
