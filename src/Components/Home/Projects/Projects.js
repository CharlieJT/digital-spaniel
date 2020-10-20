import React from 'react';
import classes from './Projects.css';
import { Container, Row, Col } from 'react-bootstrap';
import TabNavigate from './TabNavigate/TabNavigate';
import ScrollAnimation from 'react-animate-on-scroll';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Projects = () => {
    return (
        <Container className={classes.Projects}>
            <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                <Row className="my-4">
                    <Col>
                        <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>Some of our</h1>
                        <h1 className={[classes.HeadingTwo, "mb-0"].join(' ')}>Recent Projects</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <TabNavigate/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <p className={classes.SeeAllWork}>See all work</p>
                        <div className={classes.ChevronContainer}>
                            <BsChevronLeft className={classes.ChevronIcon}/>
                            <BsChevronRight className={classes.ChevronIcon}/>
                        </div>
                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    )
}

export default Projects;