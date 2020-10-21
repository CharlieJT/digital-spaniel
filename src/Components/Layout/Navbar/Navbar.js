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
        scrollVisible: true,
        sideDrawerOpen: false
    };

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    // Hide or show the menu.
    scrollHandler = () => {
        const { scrollPrevPosition } = this.state;
        const scrollCurrPosition = window.pageYOffset;
        const scrollVisible = scrollPrevPosition >= scrollCurrPosition;
        this.setState({ scrollPrevPosition: scrollCurrPosition, scrollVisible, sideDrawerOpen: false });
    };

    // Toggle the state of the side drawer
    sideDrawerToggleHandler = () => {
        const currentSideDrawerState = this.state.sideDrawerOpen;
        this.setState({ sideDrawerOpen: !currentSideDrawerState });
    }

    render() {

        return (
            <>
                <Backdrop show={this.state.sideDrawerOpen} clicked={this.sideDrawerToggleHandler} />
                <nav
                    style={{ 
                        top: this.state.scrollVisible || window.pageYOffset <= 40 ? "0" : "-150px",
                        backgroundColor: window.pageYOffset > 40 || window.innerWidth < 992 ? "#fff" : "transparent",
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
                                <NavbarItems display="inline-block" colour={window.pageYOffset > 40 || window.innerWidth < 992 ? "#506473" : "#fff"} />
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