import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Office1 from '../../../media/images/office01.png';
import Office2 from '../../../media/images/office02.png';
import Office3 from '../../../media/images/office03.png';
import Office4 from '../../../media/images/office04.png';
import classes from './AllAbout.css';
import ScrollAnimation from 'react-animate-on-scroll';

const AllAbout = () => {
    return (
        <Container fluid={true} className={classes.AllAbout}>
            <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                <Row  className={classes.AllAboutHeadingRow}>
                    <Col>
                        <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>What are</h1>
                        <h1 className={[classes.HeadingTwo, "mb-0"].join(' ')}>we all about?</h1>
                    </Col>
                </Row>
                <Row className={classes.AllAboutImageRow}>
                    <Col xs={12} lg={6}>
                        <img src={Office1} className="w-100" alt="Office 1"/>
                        <div className="d-none d-lg-flex">
                            <span className={classes.About}>About</span>
                            <span className={classes.Careers}>Careers</span>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="p-0">
                        <Row>
                            <Col xs={12} sm={7} className="p-0">
                                <img src={Office3} className="w-100" alt="Office 3"/>
                                <img src={Office4} className="w-75 float-right" alt="Office 4"/>
                            </Col>
                            <Col xs={12} sm={5} className="p-0">
                                <img src={Office2} className="w-100" alt="Office 2"/>
                            </Col>
                        </Row>
                    </Col>
                    <div className="d-flex d-lg-none">
                        <span className={classes.About}>About</span>
                        <span className={classes.Careers}>Careers</span>
                    </div>
                </Row>
                
            </ScrollAnimation>
        </Container>
    );
}

export default AllAbout;