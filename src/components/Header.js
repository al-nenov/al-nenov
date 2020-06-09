import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../redux/userReducer';

function Header(props) {
    const cartItems = useSelector(state => state.cart);
    const auth = useSelector(state => state.userAuth);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(logOut())
    }
    

    const log_Out = <Nav.Link onClick={() =>handleClick()}>Log Out</Nav.Link>;
    const log_In = <Nav.Link href="/login">Login</Nav.Link>;

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>               
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/cart">Cart {cartItems.length > 0 && cartItems.length}</Nav.Link>
                {auth.loggedIn && log_Out}
                {auth.loggedIn ? <Navbar.Text>Signed in as: {auth.user}</Navbar.Text> : log_In}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
