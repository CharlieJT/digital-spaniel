import React, { useState } from 'react';
import classes from './Capable.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';
import ScrollAnimation from 'react-animate-on-scroll';

const Capable = () => {

    // brand strategy state to detect when the "brand strategy" item has been hovered over, for every time it's hovered over, the state will change to true
    // and everytime the mouse leaves, it will change back to false. This is being used to apend a class name to an array & remove it depending on the state
    // and style a dropdown menu accordingly

    const [brandStrategyState, setBrandStrategyState] = useState(false)

    const brandStrategyMouseOver = () => setBrandStrategyState(true);
    const brandStrategyMouseLeave = () => setBrandStrategyState(false);

    let brandStrategyClasses = [classes.CapableChevron];
    let brandStrategyDropdownClasses = [classes.BrandStrategyDropdown];

    if (brandStrategyState) {
        brandStrategyClasses = [classes.CapableChevron, classes.CapableChevronActive];
        brandStrategyDropdownClasses = [classes.BrandStrategyDropdown, classes.BrandStrategyActive];
    }

    return (
        <Container fluid={true} className={classes.Capable}>
            <ScrollAnimation animateIn="fadeInRight" duration={1} animateOnce={true}>
                <Row>
                    <Col xs={12} lg={5} className={classes.CapableCol}>
                        <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>What are</h1>
                        <h1 className={[classes.HeadingTwo, "mb-0"].join(' ')}>we capable of</h1>
                        <p className={[classes.CapableText, "my-5"].join(' ')}>
                            By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers,
                            we create innovative, sustainable marketing that enhances brand experience and user engagement.
                        </p>
                        <p className={classes.OurProcess}>Our Process</p>
                    </Col>
                    <Col xs={12} lg={7} className={classes.CapableCol}>
                        <Row>
                            <Col xs={12} sm={6}>
                                <div className={classes.CapableList}>
                                    <p className={classes.ListHeading}>Brand</p>
                                    <ul className={classes.CapableListItems}>
                                        <li onMouseOver={brandStrategyMouseOver} onMouseLeave={brandStrategyMouseLeave}>
                                            <a href="/">Brand Strategy <BsChevronRight className={brandStrategyClasses.join(' ')}/>
                                                <div className={brandStrategyDropdownClasses.join(' ')}>
                                                    <ul>
                                                        <li><a href="/">Brand Strategy Item</a></li>
                                                        <li><a href="/">And Another</a></li>
                                                        <li><a href="/">Have another</a></li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li><a href="/">Logo &amp; Name</a></li>
                                        <li><a href="/">Identity &amp; Collateral</a></li>
                                    </ul>
                                </div>
                                <div className={classes.CapableList}>
                                    <p className={classes.ListHeading}>Development</p>
                                    <ul className={classes.CapableListItems}>
                                        <li><a href="/">Brand eCommence</a></li>
                                        <li><a href="/">Web Development</a></li>
                                        <li><a href="/">Mobile Apps</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className={classes.CapableList}>
                                    <p className={classes.ListHeading}>Marketing</p>
                                    <ul className={classes.CapableListItems}>
                                        <li><a href="/">Digital</a></li>
                                        <li><a href="/">Market Research</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    );
}

export default Capable;