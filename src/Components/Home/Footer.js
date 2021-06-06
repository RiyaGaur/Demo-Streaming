import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.scss';
import appstore from '../../Assets/appstore.png';
import googlestore from '../../Assets/googleplaystore.png';
import microsoftstore from '../../Assets/microsoftstore.png';


export default function Footer() {

    return (
        <>
            <div className="bottomView">
                <Container className="container1">
                    <a className="a-link" href="http://"> Home  &nbsp;</a> |
                    <a className="a-link" href="http://"> &nbsp; Terms & Condition &nbsp;</a> |
                    <a className="a-link" href="http://"> &nbsp; Privacy Policy  &nbsp;</a> |
                    <a className="a-link" href="http://"> &nbsp; Collection Statement  &nbsp;</a> |
                    <a className="a-link" href="http://"> &nbsp; Help  &nbsp;</a> |
                    <a className="a-link" href="http://"> &nbsp; Manage Account  &nbsp;</a>
                    <p className="copyright">Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
                </Container>

                <Navbar className="nav">
                    <Container className="container2">
                        <div className="social-icons">
                            <FacebookIcon fontSize="medium" className="social-icon" />
                            <TwitterIcon fontSize="medium" className="social-icon" />
                            <InstagramIcon fontSize="medium" className="social-icon" />
                        </div>
                        <div>
                            <Nav className="ml-auto">
                                <Nav.Link href="https://www.apple.com/in/app-store/"><img className="app-icon" src={appstore} alt="" /></Nav.Link>
                                <Nav.Link href="https://play.google.com/store"><img className="app-icon" src={googlestore} alt="" /></Nav.Link>
                                <Nav.Link href="https://www.microsoft.com/en-in/store/apps/windows"><img className="app-icon" src={microsoftstore} alt="" /></Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>



            </div>

        </>
    )
}
