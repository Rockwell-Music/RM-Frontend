import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import './Home.css';

function debounce(func, wait = 5, immediate = false) {
    let timeout;

    return () => {
        const context = this;
        const args = arguments;

        const later = () => {
            timeout = null;

            if (!immediate) {
                func.apply(context, args);
            }
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    }
}

function HomeDesktop() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", debounce(handleScroll));
        return () => window.removeEventListener("scroll", debounce(handleScroll));
    }, []);
  
    const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
        springscrollY: 0
    }));
  
    const moonLevel = -4;
    const mountainLevel = 10;
    const treeLevel = 8;
    const wheelLevel = 8;
    const balloonLevel = 4;
    const backgroundLevel = 8;
    const textTopLevel = 20;
    const textTitleLevel = 20;
  
    const interpMoon = springscrollY.interpolate(o => `translateY(${o / moonLevel}px)`);
    const interpMountains = springscrollY.interpolate(o => `translateY(${o / mountainLevel}px)`);
    const interpTrees = springscrollY.interpolate(o => `translateY(${o / treeLevel}px)`);
    const interpWheel = springscrollY.interpolate(o => `translateY(${o / wheelLevel}px)`);
    const interpBalloon = springscrollY.interpolate(o => `translateY(${o / balloonLevel}px)`);
    const interpBackground = springscrollY.interpolate(o => `translateY(${o / backgroundLevel}px)`);
    const interpTextTop = springscrollY.interpolate(o => `translateY(${o / textTopLevel}px)`);
    const interpTitle = springscrollY.interpolate(o => `translateY(${o / textTitleLevel}px)`);

    springsetScrollY({ springscrollY: scrollY });
  
    return (
        <div className="coachella-banner">
            <animated.div className="coachella-mountains" style={{ transform: interpBackground }}>
                <Image className="coachella-banner-element" src="./Coachella-Sky.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpMoon }}>
                <Image className="coachella-banner-element" src="./Coachella-Mountains-Moon.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpMountains }}>
                <Image className="coachella-banner-element" src="./Coachella-Mountains.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTitle }}>
                <Image className="coachella-banner-element" src="./Coachella-Music.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpBalloon }}>
                <Image className="coachella-banner-element" src="./Coachella-Balloons.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpWheel }}>
                <Image className="coachella-banner-element" src="./Coachella-Wheel.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTrees }}>
                <Image className="coachella-banner-element" src="./Coachella-Trees.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTextTop }}>
                <Image className="coachella-banner-element" src="./Coachella-Text-Top.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTitle }}>
                <Image className="coachella-banner-element" src="./Coachella-Rockwell.png" />
            </animated.div>
        </div>
    );
}

function HomeMobile() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", debounce(handleScroll));
        return () => window.removeEventListener("scroll", debounce(handleScroll));
    }, []);
  
    const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
        springscrollY: 0
    }));
  
    const moonLevel = -16;
    const mountainLevel = 10;
    const treeLevel = 8;
    const wheelLevel = 8;
    const balloonLevel = -10;
    const backgroundLevel = 8;
    const textTopLevel = 4;
    const textTitleLevel = 4;
  
    const interpMoon = springscrollY.interpolate(o => `translateY(${o / moonLevel}px)`);
    const interpMountains = springscrollY.interpolate(o => `translateY(${o / mountainLevel}px)`);
    const interpTrees = springscrollY.interpolate(o => `translateY(${o / treeLevel}px)`);
    const interpWheel = springscrollY.interpolate(o => `translateY(${o / wheelLevel}px)`);
    const interpBalloon = springscrollY.interpolate(o => `translateY(${o / balloonLevel}px)`);
    const interpBackground = springscrollY.interpolate(o => `translateY(${o / backgroundLevel}px)`);
    const interpTextTop = springscrollY.interpolate(o => `translateY(${o / textTopLevel}px)`);
    const interpTitle = springscrollY.interpolate(o => `translateY(${o / textTitleLevel}px)`);

    springsetScrollY({ springscrollY: scrollY });
  
    return (
        <div className="coachella-banner">
            <animated.div className="coachella-mountains" style={{ transform: interpBackground }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Background.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpMoon }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Moon.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpMountains }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Mountains.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTitle }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Music.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpBalloon }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Balloons.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpWheel }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Wheel.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTrees }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Trees.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTextTop }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Text.png" />
            </animated.div>
  
            <animated.div className="coachella-mountains" style={{ transform: interpTitle }}>
                <Image className="coachella-banner-element" src="./Coachella-Mobile-Rockwell.png" />
            </animated.div>
        </div>
    );
} 

export default function Home() {
    const [width, setWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className="coachella-banner">
                {width > 768 ? (
                    <HomeDesktop />
                ) : (
                    <HomeMobile />
                )}
            </div>

            <div className="container home-container">
                <h1 className="home-title">Our Services</h1>

                <Row>
                    <Col sm className="home-card">
                        <Card>
                            <Card.Img variant="top" src="./custom-icon.png" />
                            
                            <Card.Body>
                                <Card.Title className="home-card-title">Custom Builds</Card.Title>
                                
                                <Card.Text className="home-card-body">
                                    We can help you bring your ideas and dreams to life.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm className="home-card">
                        <Card>
                            <Card.Img variant="top" src="./repair-icon.png" />
                            
                            <Card.Body>
                                <Card.Title className="home-card-title">Repairs</Card.Title>
                                
                                <Card.Text className="home-card-body">
                                    We offer repair services for any stringed instrument.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm className="home-card">
                        <Card>
                            <Card.Img variant="top" src="./consignment-icon.png" />
                            
                            <Card.Body>
                                <Card.Title className="home-card-title">Consignment</Card.Title>
                                
                                <Card.Text className="home-card-body">
                                    Consign your stringed instrument with us and we'll list it in our store.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}