import React from 'react';
import classes from './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <Container fluid={true} className={classes.Footer}>
            <Row>
                <Col xs={12} lg={5} className={classes.FooterCol}>
                    <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>We're a brands</h1>
                    <h1 className={classes.HeadingTwo}>best friend</h1>
                    <p className={classes.OurProcess}>Let's Talk</p>
                </Col>
                <Col xs={12} lg={7} className={classes.FooterCol}>
                    <Row>
                        <Col xs={12} sm={6} lg={4}>
                            <div className={classes.FooterList}>
                                <p className={classes.ListHeading}>Explore</p>
                                <ul className={classes.FooterListItems}>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Work</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Careers</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div className={classes.FooterList}>
                                <p className={classes.ListHeading}>Services</p>
                                <ul className={classes.FooterListItems}>
                                    <li><a href="/">Brand</a></li>
                                    <li><a href="/">Development</a></li>
                                    <li><a href="/">Marketing</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div className={classes.FooterList}>
                                <p className={classes.ListHeading}>Questions</p>
                                <ul className={classes.FooterListItems}>
                                    <li><a href="/">Digital</a></li>
                                    <li><a href="/">Market Research</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={[classes.LowerFooter, "pb-2"].join(' ')}>
                <Col xs={12} lg={6} className={classes.LowerFooterText}>
                    <p>Copyright &copy; Digital Spaniel 2019. All rights reserved.</p>
                </Col>
                <Col xs={12} lg={6} className={[classes.SocialIcons, "d-flex justify-content-center justify-content-lg-end"].join(' ')}>
                    <FaFacebookF className={classes.FacebookIcon}/>
                    <FaTwitter className={classes.TwitterIcon}/>
                    <FaInstagram className={classes.InstagramIcon}/>
                    <FaLinkedinIn className={classes.LinkedinIcon}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;