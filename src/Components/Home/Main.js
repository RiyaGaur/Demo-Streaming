import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Title from '../Navbar/Title';
import Topbar from '../Navbar/Topbar';
import './Main.scss';
import img from '../../Assets/reels.jpg';

export default function Main() {
    return (
        <>
            <Topbar />
            <Title name="Titles" />
            <Container>
                <div className='twoCards'>
                    <Link to="/series" className="nav-link" exact>
                        <Card className="card">
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className="card-title">Series</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/movies" className="nav-link" exact>
                        <Card className="card">
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className="card-title">Movies</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </Container>
            <Footer />
        </>
    )
}
