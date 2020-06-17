import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../actions/userActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Header() {
    const cartItems = useSelector(state => state.cart);
    const auth = useSelector(state => state.userAuth);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(logOut())
    }
    

    const log_Out = <Nav.Link onClick={() =>handleClick()}>Log Out</Nav.Link>;
    const log_In = <Nav.Link href="/login">Login</Nav.Link>;
    const cartItemsCounter = cartItems.length > 0 && <span className="cart-items_counter">{cartItems.length}</span>;

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>               
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">My profile</Nav.Link>               
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/cart" className="cart-items">
                            <FontAwesomeIcon icon="shopping-basket"/>
                            {cartItemsCounter}
                        </Nav.Link>
                        {auth.loggedIn && log_Out}
                        {auth.loggedIn ? <Navbar.Text>Signed in as: <a href="/dashboard">{auth.user}</a></Navbar.Text> : log_In}
                    </Nav>
                </Navbar.Collapse>
            </Container>            
        </Navbar>
    )
}

export default Header;
