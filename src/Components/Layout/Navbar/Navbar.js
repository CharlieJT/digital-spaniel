import React, { Component } from "react";
import classes from "./Navbar.css";
import { Container, Row, Col } from 'react-bootstrap';
import NavbarItems from './NavbarItems/NavbarItems';
import DigitalSpanielLogo from '../../../media/images/digitalSpanielLogo.PNG';

class Navbar extends Component {
    state = {
        scrollPrevPosition: window.pageYOffset,
        visible: true
    };

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { scrollPrevPosition } = this.state;
    const scrollCurrPosition = window.pageYOffset;
    const visible = scrollPrevPosition > scrollCurrPosition;
    this.setState({scrollPrevPosition: scrollCurrPosition, visible });
  };

  render() {


    return (
        <nav style={{ top: !this.state.visible ? "-150px" : "0" }} className={classes.Navbar}>
            <Container fluid={true}>
                <Row className="d-flex align-items-center">
                    <Col xs={6}>
                        <img 
                            src={DigitalSpanielLogo} 
                            style={{ height: window.pageYOffset > 40 ? "60px" : "80px"}} 
                            className={classes.NavbarLogo} 
                            alt="Digital Spaniel Logo" />
                    </Col>
                    <Col xs={6}>
                        <NavbarItems />
                    </Col>
                </Row>
            </Container>
        </nav>
    );
  }
}

export default Navbar;