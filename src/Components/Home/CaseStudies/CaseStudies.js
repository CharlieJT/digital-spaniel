import React from 'react';
import classes from './CaseStudies.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import CaseStudiesSlider from './CaseStudiesSlider/CaseStudiesSlider';

const CaseStudies = () => {
    return (
        <ScrollAnimation animateIn="fadeInRight" duration={1} animateOnce={true}>
            <Container fluid={true} className={classes.CaseStudies}>
                <Row className="mb-5">
                    <Col>
                        <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>Case Studies</h1>
                        <p className={[classes.CaseStudiesText, "my-4 mx-auto"].join(' ')}>
                            Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of your and your business.
                        </p>
                    </Col>
                </Row>
                <CaseStudiesSlider />
            </Container>
        </ScrollAnimation>
    );
}

export default CaseStudies;