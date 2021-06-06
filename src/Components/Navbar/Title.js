import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Title(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "40px" }}>
                <Container>
                    <h5 style={{ color: "white" }}>Popular {props.name}</h5>
                </Container>
            </Navbar>
        </>
    )
}
