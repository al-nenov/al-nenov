import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../redux/userReducer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Header(props) {
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
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>               
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">My profile</Nav.Link>               
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/cart" className="cart-items">
                        <FontAwesomeIcon icon="shopping-basket"/>
                        {cartItemsCounter}
                    </Nav.Link>
                    {auth.loggedIn && log_Out}
                    {auth.loggedIn ? <Navbar.Text>Signed in as: <a href="/dashboard">{auth.user}</a></Navbar.Text> : log_In}
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default Header;
