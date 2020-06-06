import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {loginUser, logOut} from '../redux/userReducer';


function Header(props) {
    const log_Out = <Nav.Link onClick={() => props.logout()}>Log Out</Nav.Link>;
    const log_In = <Nav.Link onClick={() => props.login('user2')}>Login</Nav.Link>;
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
               
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                {props.auth.loggedIn && log_Out}
                {props.auth.loggedIn ? <Navbar.Text>Signed in as: {props.auth.user}</Navbar.Text> : log_In}
            </Navbar.Collapse>
        </Navbar>
    )
}

function mapStateToProps(globalState) {
    return {
        auth: globalState.userAuth
    }
}
const mapDispatchToProps = {
    login: loginUser,
    logout: logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);