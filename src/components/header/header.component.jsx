import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/user/user.actions'
import CartItemsIcon from '../cart/cart-items-icon.component'

const Header = () => {
    const auth = useSelector((state) => state.userAuth.currentUser)
    const dispatch = useDispatch()

    const handleClick = () => {
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
                            <CartItemsIcon />
                        </NavLink>
                        {auth && log_Out}
                        {auth ? (
                            <Navbar.Text>
                                Signed in as: <Link to="/dashboard">{auth.displayName || auth.email}</Link>
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
