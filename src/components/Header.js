import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {logOut} from '../redux/userReducer';
import {logout} from '../services/userService';


function Header(props) {
    function handleClick() {
        if(logout) {
            props.logOut()
        }
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
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

function mapStateToProps(globalState) {
    return {
        auth: globalState.userAuth
    }
}

export default connect(mapStateToProps, {logOut})(Header);
