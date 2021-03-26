import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import "./About.css";

export default function About() {
    return (
        <div>
            <Container className="about-container" fluid="md">
                <Row>
                    <Col md={4}>
                        <Image src="./rocky.jpg" className="image-left"/>
                    </Col>

                    <Col md={8} className="about-body">
                        <h1 className="about-title">ABOUT ROCKWELL MUSIC</h1>
                        <p className="about-text">Founded in 2020 by Coachella Valley local John “Rocky” Rockwell alongside his son with the goal of offering professional level service and craftsmanship to our customers. Rocky comes from a lengthy background in Heavy Metal under his band “Tyrant” which he helped form in the late 70s. Rocky has designed, built and maintained his own guitars for many years and began offering his services as a Master Luthier in 2014.</p>
                        <p className="about-text">To learn more about us, find us on <a href="/" className="about-link">Instagram</a>, <a href="/" className="about-link">Facebook</a> and <a href="/" className="about-link">LinkedIn</a> or visit our store located at 1234 AddressName Ave, Palm Desert CA, 92260</p>

                        <br></br>

                        <h1 className="about-title">STORE HOURS</h1>
                        <p className="about-hours">Mon-Fri - 10:00AM to 6:00PM</p>
                        <p className="about-hours">Sat/Sun - 10:00AM - 3:00PM</p>

                        <br></br>

                        <h1 className="about-title">CONTACT US</h1>
                        <p className="about-hours">Tel. 760-123-4567</p>
                        <p className="about-hours">Email: support@rockwellmusicrepair.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}