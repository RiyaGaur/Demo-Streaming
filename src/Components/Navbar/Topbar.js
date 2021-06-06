import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topbar.scss';


export default function Topbar() {
    return (
        <>
            <Navbar bg="primary" variant="dark" className="nav">
                <Container className="container">
                    <h3><Link to="/" exact className="title">DEMO Streaming</Link></h3>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="login">Login</Nav.Link>
                        <Button variant="dark" size="sm" className="button">Start your free trial</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}