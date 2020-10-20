import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SpanielImage from '../../../media/images/Spaniel01_gradient.png';
import classes from './WeUnleash.css';
import ScrollAnimation from 'react-animate-on-scroll';

const WeUnleash = () => {
    return (
        <Container fluid={true} className={classes.WeUnleash}>
            <Row>
                <Col className={classes.UnleashColumn} xs={12} lg={6}>
                    <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                        <div>
                            <p className={[classes.UnleashPoints, "mb-4"].join(' ')}>Brand, Dev, Ecom, Marketing</p>
                            <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>We unleash</h1>
                            <h1 className={[classes.HeadingTwo, "mb-0"].join(' ')}>business potential</h1>
                            <p className={[classes.UnleashText, "my-4"].join(' ')}>
                                We create brand experiences which are memorable and distinct. Our experienced team create amd develop
                                brands with personality and resonance.
                            </p>
                            <p className={classes.LetsTalk}>Let's talk</p>
                        </div>
                    </ScrollAnimation>
                </Col>
                <Col xs={12} lg={6}>
                    <img src={SpanielImage} className="w-100" alt="Running Spaniel"/>
                </Col>
            </Row>
        </Container>
    )
}

export default WeUnleash;