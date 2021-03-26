import React from "react";
import './Services.css';
import { Container, CardDeck, Card, Button, Accordion } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";

export default function Services() {
    return (
        <div>
            <Container className="services-container">
                <h1 className="service-title">SERVICES WE OFFER</h1>
                
                <CardDeck>
                    <Card className="card">
                        <Card.Img variant="top" src="https://static.guitarcenter.com/static/gc/lpages/services/repairs/types/images/22148-gc-repairs-1.jpg" />
                        
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Stringed Instrument Maintenance</Card.Title>
                            
                            <Card.Text className="card-text">
                                <ul>
                                    <li>Restrings</li>
                                    <li>Intonation</li>
                                    <li>Full 22-point setups</li>
                                    <li>Action and truss adjustment</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card">
                        <Card.Img variant="top" src="https://static.guitarcenter.com/static/gc/lpages/services/repairs/types/images/22148-gc-repairs-6.jpg" />
                        
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Structural Repair</Card.Title>
                            
                            <Card.Text className="card-text">
                                <ul>
                                    <li>Headstocks</li>
                                    <li>Crack repair</li>
                                    <li>Brace repair</li>
                                    <li>Bridge pull and bridge replacements</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card">
                        <Card.Img variant="top" src="https://static.guitarcenter.com/static/gc/lpages/services/repairs/types/images/22148-gc-repairs-3.jpg" />
                        
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Electronics Upgrades and Customizations</Card.Title>
                            
                            <Card.Text className="card-text">
                                <ul>
                                    <li>Electronic modifications on all stringed instruments</li>
                                    <li>Pickup installation</li>
                                    <li>Wiring customization</li>
                                    <li>Personalized upgrades and modifcations</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>


                <br></br>


                <CardDeck>
                    <Card className="card">
                        <Card.Img variant="top" src="https://static.guitarcenter.com/static/gc/lpages/services/repairs/types/images/22148-gc-repairs-4.jpg" />
                        
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Hardware</Card.Title>
                            
                            <Card.Text className="card-text">
                                <ul>
                                    <li>Hardware customization</li>
                                    <li>Cosmetic enhancements</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card">
                        <Card.Img variant="top" src="https://static.guitarcenter.com/static/gc/lpages/services/repairs/types/images/22148-gc-repairs-5.jpg" />
                        
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Bone & Graphite</Card.Title>
                            
                            <Card.Text className="card-text">
                                <ul>
                                    <li>Nut replacement</li>
                                    <li>Saddle replacement</li>
                                    <li>Fabrication from blank materials</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card">
                        <Card.Img variant="top" src="https://static.guitarcenter.com/static/gc/lpages/services/repairs/types/images/22148-gc-repairs-2.jpg" />
                        
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Fret Repair</Card.Title>
                            
                            <Card.Text className="card-text">
                                <ul>
                                    <li>Refret</li>
                                    <li>Fret level</li>
                                    <li>Crown</li>
                                    <li>Polish</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br></br>
                <h1 className="service-title">FREQUENTLY ASKED QUESTIONS</h1>

                <Accordion className="accordion">
                    <Card className="faq-card">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="faq-button">
                                <FaPlus className="faq-expand-icon"/> Do I need an appointment to speak with a repair technitian?
                            </Accordion.Toggle>
                        </Card.Header>
                                
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="faq-card-body">No appointment is necessary. You are welcome to make an appointment if you prefer and it may save you from waiting in line.</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-card">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="faq-button">
                                <FaPlus className="faq-expand-icon"/> How long will it take for my repair to be completed?
                            </Accordion.Toggle>
                        </Card.Header>
                                
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="faq-card-body">At the time of taking in the instrument we will offer a time estimate but these estimates are subject to change unexpectedly.</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-card">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2" className="faq-button">
                                <FaPlus className="faq-expand-icon"/> How often do I need maintenance?
                            </Accordion.Toggle>
                        </Card.Header>
                                
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="faq-card-body">How often you need to replace your strings depends on how often you play, climate conditions, type and quality of string, etc. Generally, every three to four weeks is about right, but if you play hard and often, you'll want to change strings as soon as they start to feel grungy or lose tuning stability.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    );
}