import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import './Navigation.css';
import { Nav, Image, Modal, Button } from 'react-bootstrap';

import About from '../about/About';
import Services from '../services/Services';
import Home from '../home/Home';

function ContactModal(props) {
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        className="contact-modal"
        centered
        >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    Contact Us
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body">
                <h1>Phone:</h1>
                <p>760-673-9583</p>

                <h1>Email:</h1>
                <p>support@rockwellmusicrepair.com</p>

                <h1>Store Hours:</h1>
                <p className="modal-nomargin">Mon-Sat - 10:00AM to 6:00PM</p>
            </Modal.Body>

            <Modal.Footer className="modal-footer">
                <Button className="modal-btn" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Navigation() {
    const [modalShow, setModalShow] = React.useState(false);

    function handleScroll() {
        if (window.scrollY > 20) {
            document.querySelector(".rockwell-navbar").className="rockwell-navbar scrolled";
        } else {
            document.querySelector(".rockwell-navbar").className = "rockwell-navbar unscrolled";
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div>
            <div className="rockwell-navbar">
                <Link to="/"><Image src="./logo-long-yellow.png" className="logo"/></Link>

                <Nav className="justify-content-center navigation" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/services" className="link hvr-grow">SERVICES</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/about" className="link hvr-grow">ABOUT</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link onClick={() => setModalShow(true)} className="link hvr-grow">CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/services">
                    <Services />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>

            <ContactModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}