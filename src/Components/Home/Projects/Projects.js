import React from 'react';
import classes from './Projects.css';
import { Container, Row, Col } from 'react-bootstrap';
import TabNavigate from './TabNavigate/TabNavigate';

const Projects = () => {
    return (
        <Container className={classes.Projects}>
            <Row className="my-4">
                <Col>
                    <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>Some of our</h1>
                    <h1 className={[classes.HeadingTwo, "mb-0"].join(' ')}>Recent Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TabNavigate/>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;