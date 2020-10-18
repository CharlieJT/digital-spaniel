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
        visible: true,
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
    const visible = scrollPrevPosition > scrollCurrPosition;
    this.setState({scrollPrevPosition: scrollCurrPosition, visible });
  };

  sideDrawerToggleHandler = () => {
    const currentSideDrawerState = this.state.sideDrawerOpen;
    this.setState({ sideDrawerOpen: !currentSideDrawerState });
  }

  render() {

    return (
        <>
            <Backdrop show={this.state.sideDrawerOpen} clicked={this.sideDrawerToggleHandler}/>
            <nav style={{ top: !this.state.visible ? "-150px" : "0", backgroundColor: window.pageYOffset > 40 ? "#fff" : "transparent"  }} className={classes.Navbar}>
                <Container fluid={true}>
                    <Row className="d-flex align-items-center">
                        <Col xs={6}>
                            <img 
                                src={DigitalSpanielLogo} 
                                style={{ height: window.pageYOffset > 40 ? "60px" : "80px"}} 
                                className={classes.NavbarLogo} 
                                alt="Digital Spaniel Logo" />
                        </Col>
                        <Col className="d-none d-lg-block" xs={6}>
                            <NavbarItems display="inline-block"/>
                        </Col>
                        <Col className="d-lg-none">
                            <Hamburger clicked={this.sideDrawerToggleHandler} />
                        </Col>
                    </Row>
                    <Row>
                        <SideDrawer sideDrawerOpen={this.state.sideDrawerOpen}/>
                    </Row>
                </Container>
            </nav>
        </>
    );
  }
}

export default Navbar;