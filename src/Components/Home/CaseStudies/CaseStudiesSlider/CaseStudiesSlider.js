import React, { Component } from 'react';
import Dashboard from '../../../../media/images/dashboard01.png';
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import classes from './CaseStudiesSlider.css';

class CaseStudiesSlider extends Component {

    render() {

        const settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
        };

        return (
            <Slider className={[classes.Slider, classes.active].join(' ')} {...settings}>
                <Row className={[classes.SliderRow, "d-flex align-items-center"].join(' ')}>
                    <Col xs={12} lg={7} className="p-0">
                        <img src={Dashboard} className="d-none d-lg-block w-100" alt="Dashboard" />
                    </Col>
                    <Col xs={12} lg={5} className="p-0">
                        <div className={classes.CaseStudiesDescription}>
                            <img src={Dashboard} className="d-lg-none w-100 mb-2" alt="Dashboard" />
                            <h5>Project title here</h5>
                            <p>Short project description goes here to explain what the project is all about</p>
                            <p className={classes.ReadMore}>Read More</p>
                        </div>
                    </Col>
                </Row>
                <Row className={[classes.SliderRow, "d-flex align-items-center"].join(' ')}>
                    <Col xs={12} lg={7} className="p-0">
                        <img src={Dashboard} className="d-none d-lg-block w-100" alt="Dashboard" />
                    </Col>
                    <Col xs={12} lg={5} className="p-0">
                        <div className={classes.CaseStudiesDescription}>
                            <img src={Dashboard} className="d-lg-none w-100 mb-2" alt="Dashboard" />
                            <h5>Project title here</h5>
                            <p>Short project description goes here to explain what the project is all about</p>
                            <p className={classes.ReadMore}>Read More</p>
                        </div>
                    </Col>
                </Row>
                <Row className={[classes.SliderRow, "d-flex align-items-center"].join(' ')}>
                    <Col xs={12} lg={7} className="p-0">
                        <img src={Dashboard} className="d-none d-lg-block w-100" alt="Dashboard" />
                    </Col>
                    <Col xs={12} lg={5} className="p-0">
                        <div className={classes.CaseStudiesDescription}>
                            <img src={Dashboard} className="d-lg-none w-100 mb-2" alt="Dashboard" />
                            <h5>Project title here</h5>
                            <p>Short project description goes here to explain what the project is all about</p>
                            <p className={classes.ReadMore}>Read More</p>
                        </div>
                    </Col>
                </Row>
            </Slider>
        );
    }
}

export default CaseStudiesSlider;