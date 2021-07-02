import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaInstagram, FaLinkedinIn, FaFacebookSquare, FaRegCopyright } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <Image src="./footer-reaper.png" className="footer-image" />
            
            <Container className="footer-content">
                <h1 className="footer-header">FOLLOW US</h1>

                <a href="https://www.instagram.com/rockwellmusicrepair" className="footer-link"><FaInstagram className="footer-icon" /></a>
                <a href="/" className="footer-link"><FaFacebookSquare className="footer-icon" /></a>
                <a href="/" className="footer-link"><FaLinkedinIn className="footer-icon" /></a>

                <h1 className="footer-header">SUPPORT</h1>
                <a href="tel:760-673-9583" className="footer-text">Tel. (760)-673-9583</a>
                <a href="mailto:support@rockwellmusicrepairs.com" className="footer-text">Email: support@rockwellmusicrepair.com</a>

                <br></br>

                <p className="footer-text"><FaRegCopyright /> Rockwell Music & Repairs LLC</p>
            </Container>
        </div>
    );
}