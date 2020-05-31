import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function Header() {
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
export default Header;