import React, { Component } from "react";
import classes from "./Navbar.css";
import { Container, Row, Col } from 'react-bootstrap';
import NavbarItems from './NavbarItems/NavbarItems';
import DigitalSpanielLogo from '../../../media/images/digitalSpanielLogo.PNG';
import Hamburger from '../../UI/Hamburger/Hamburger';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Navbar extends Component {
    state = {
        scrollPrevPosition: window.pageYOffset,
        widthPrevSize: window.innerWidth,
        scrollVisible: true,
        widthVisible: window.innerWidth > 992,
        sideDrawerOpen: false
    };

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
        window.addEventListener("resize", this.widthHandler);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
        window.removeEventListener("resize", this.widthHandler);
    }

    // Hide or show the menu.
    scrollHandler = () => {
        const { scrollPrevPosition } = this.state;
        const scrollCurrPosition = window.pageYOffset;
        const scrollVisible = scrollPrevPosition > scrollCurrPosition;
        this.setState({ scrollPrevPosition: scrollCurrPosition, scrollVisible, sideDrawerOpen: false });
    };

    sideDrawerToggleHandler = () => {
        const currentSideDrawerState = this.state.sideDrawerOpen;
        this.setState({ sideDrawerOpen: !currentSideDrawerState });
    }

    widthHandler = () => {
        const { widthPrevSize } = this.state;
        const widthCurrSize = window.innerWidth;
        const widthVisible = widthPrevSize > 992;
        this.setState({ widthPrevSize: widthCurrSize, widthVisible });
    }

    render() {

        return (
            <>
                <Backdrop show={this.state.sideDrawerOpen} clicked={this.sideDrawerToggleHandler} />
                <nav
                    style={{ 
                        top: !this.state.scrollVisible ? "-150px" : "0",
                        backgroundColor: window.pageYOffset > 40 || !this.state.widthVisible ? "#fff" : "transparent",
                        boxShadow: window.pageYOffset > 40 ? "1px 1px 5px #6b6b6b" : "none"
                    }} 
                    className={classes.Navbar}>
                    <Container fluid={true}>
                        <Row className="d-flex align-items-center">
                            <Col xs={6}>
                                <a href="/">
                                    <img
                                        src={DigitalSpanielLogo}
                                        style={{ height: window.pageYOffset > 40 ? "60px" : "80px" }}
                                        className={classes.NavbarLogo}
                                        alt="Digital Spaniel Logo" />
                                </a>
                            </Col>
                            <Col className="d-none d-lg-block" xs={6}>
                                <NavbarItems display="inline-block" colour={window.pageYOffset > 40 || !this.state.widthVisible ? "#506473" : "#fff"} />
                            </Col>
                            <Col className="d-lg-none">
                                <Hamburger clicked={this.sideDrawerToggleHandler} open={this.state.sideDrawerOpen}/>
                            </Col>
                        </Row>
                        <Row>
                            <SideDrawer sideDrawerOpen={this.state.sideDrawerOpen} clicked={this.sideDrawerToggleHandler} />
                        </Row>
                    </Container>
                </nav>
            </>
        );
    }
}

export default Navbar;