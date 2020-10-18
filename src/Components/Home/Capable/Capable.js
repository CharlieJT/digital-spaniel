import React from 'react';
import classes from './Capable.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';

const Capable = () => {
    return (
        <Container fluid={true} className={classes.Capable}>
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
                                    <li>Brand Strategy <BsChevronRight className={classes.CapableChevron}/></li>
                                    <li>Logo &amp; Name</li>
                                    <li>Identity &amp; Collateral</li>
                                </ul>
                            </div>
                            <div className={classes.CapableList}>
                                <p className={classes.ListHeading}>Development</p>
                                <ul className={classes.CapableListItems}>
                                    <li>Brand eCommence</li>
                                    <li>Web Development</li>
                                    <li>Mobile Apps</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className={classes.CapableList}>
                                <p className={classes.ListHeading}>Marketing</p>
                                <ul className={classes.CapableListItems}>
                                    <li>Digital</li>
                                    <li>Market Research</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Capable;