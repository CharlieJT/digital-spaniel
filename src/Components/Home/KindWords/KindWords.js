import React from 'react';
import classes from './KindWords.css';
import { Container, Row, Col } from 'react-bootstrap';
import KindWordsSlider from './KindWordsSlider/KindWordsSlider';
import ScrollAnimation from 'react-animate-on-scroll'; 

const KindWords = () => {
    return (
        <Container fluid={true} className={classes.KindWords}>
            <ScrollAnimation animateIn="fadeInRight" duration={1}>
                <Row>
                    <Col className={classes.KindWordsColumn} xs={12} lg={6}>
                        <div>
                            <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>Kind words</h1>
                            <h1 className={[classes.HeadingTwo, "mb-0"].join(' ')}>from our clients</h1>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <KindWordsSlider />
                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    );
}

export default KindWords;