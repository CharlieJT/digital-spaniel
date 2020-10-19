import React, { useState } from 'react';
import { Tabs } from "@feuer/react-tabs";
import { Container, Row, Col } from 'react-bootstrap';
import classes from './TabNavigate.css';
import Whellies from '../../../../media/images/whellies01.png';
import MakeIdeasHappen from '../../../../media/images/newspaper02.png';
import TescosFinest from '../../../../media/images/makerek.png';
import Dinamo from '../../../../media/images/newspaper.png';
import Rider from '../../../../media/images/rider01.png';

const TabNavigate = () => {
    // Create state true or false for each project when hovered over (setting to true on mouse enter & false on mouse leave), classes are then 
    // created & active state is apended to the class name depending on if a specific state is true or false

    // If I had more time with this one, I would have made state more dynatic & perhaps kept each item in state & created a category for each &
    // mapped through each item & only showing items of a specific category in their respective category.

    const [ whelliesHoverState, setWhelliesHoverState ] = useState(false);
    const [ makeIdeasHappenHoverState, setMakeIdeasHappenHoverState ] = useState(false);
    const [ tescosFinestHoverState, setTescosFinestHoverState ] = useState(false);
    const [ dinamoHoverState, setDinamoHoverState ] = useState(false);
    const [ riderHoverState, setRiderHoverState ] = useState(false);
    
    const whelliesHoverOver = () => setWhelliesHoverState(true);
    const whelliesHoverLeave = () => setWhelliesHoverState(false);
    
    const makeIdeasHappenHoverOver = () => setMakeIdeasHappenHoverState(true);
    const makeIdeasHappenHoverLeave = () => setMakeIdeasHappenHoverState(false);

    const tescosFinestHoverOver = () => setTescosFinestHoverState(true);
    const tescosFinestHoverLeave = () => setTescosFinestHoverState(false);

    const dinamoHoverOver = () => setDinamoHoverState(true);
    const dinamoHoverLeave = () => setDinamoHoverState(false);

    const riderHoverOver = () => setRiderHoverState(true);
    const riderHoverLeave = () => setRiderHoverState(false);


    let whelliesClass = [classes.ImageOverlay];
    let makeIdeasHappenClass = [classes.ImageOverlay];
    let tescosFinestClass = [classes.ImageOverlay];
    let dinamoClass = [classes.ImageOverlay];
    let riderClass = [classes.ImageOverlay];

    if (whelliesHoverState) {
        whelliesClass = [classes.ImageOverlay, classes.ImageOverlayActive];
    }

    if (makeIdeasHappenHoverState) {
        makeIdeasHappenClass = [classes.ImageOverlay, classes.ImageOverlayActive];
    }

    if (tescosFinestHoverState) {
        tescosFinestClass = [classes.ImageOverlay, classes.ImageOverlayActive];
    }

    if (dinamoHoverState) {
        dinamoClass = [classes.ImageOverlay, classes.ImageOverlayActive];
    }

    if (riderHoverState) {
        riderClass = [classes.ImageOverlay, classes.ImageOverlayActive];
    }

    return (
        <Tabs
            tabsProps={{
                style: {
                    textAlign: "left"
                }
            }}
            activeTab={{
                id: "all"
            }}
        >
            <Tabs.Tab id="all" title="All">
                <div style={{ padding: 10 }}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={whelliesHoverOver} onMouseLeave={whelliesHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={whelliesClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Whellies</h5>
                                            <p className={classes.OverlayText}>The place to go for the best whellies, come &amp; see for yourself</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={Whellies} className="w-100 m-0 p-0" alt="Whellies" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={makeIdeasHappenHoverOver} onMouseLeave={makeIdeasHappenHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={makeIdeasHappenClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Make Ideas Happen</h5>
                                            <p className={classes.OverlayText}>A local paper with big ideas needed a sharp new brand to inspire</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={MakeIdeasHappen} className="w-100 m-0 p-0" alt="Make Ideas Happen" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={tescosFinestHoverOver} onMouseLeave={tescosFinestHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={tescosFinestClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Tescos Finest</h5>
                                            <p className={classes.OverlayText}>Tescos only delivers the best quality products at the right price</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={TescosFinest} className="w-100 m-0 p-0" alt="Tescos Finest" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} lg={8} className="my-2 p-2" onMouseEnter={dinamoHoverOver} onMouseLeave={dinamoHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={dinamoClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Dinamo</h5>
                                            <p className={classes.OverlayText}>I've never heard of Dinamo before so this is just example text</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={Dinamo} className="w-100 m-0 p-0" alt="Dinamo" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={riderHoverOver} onMouseLeave={riderHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={riderClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Rider</h5>
                                            <p className={classes.OverlayText}>A cartoon guy riding a mini bike. Again, example text</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={Rider} className="w-100 m-0 p-0" alt="Rider" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="branding" title="Branding">
                <div style={{ padding: 10 }}>
                <Container>
                        <Row>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={tescosFinestHoverOver} onMouseLeave={tescosFinestHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={tescosFinestClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Tescos Finest</h5>
                                            <p className={classes.OverlayText}>Tescos only delivers the best quality products at the right price</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={TescosFinest} className="w-100 m-0 p-0" alt="Tescos Finest" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="webDesign" title="Web Design">
                <div style={{ padding: 10 }}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={tescosFinestHoverOver} onMouseLeave={tescosFinestHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={tescosFinestClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Tescos Finest</h5>
                                            <p className={classes.OverlayText}>Tescos only delivers the best quality products at the right price</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={TescosFinest} className="w-100 m-0 p-0" alt="Tescos Finest" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} lg={8} className="my-2 p-2" onMouseEnter={dinamoHoverOver} onMouseLeave={dinamoHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={dinamoClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Dinamo</h5>
                                            <p className={classes.OverlayText}>I've never heard of Dinamo before so this is just example text</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={Dinamo} className="w-100 m-0 p-0" alt="Dinamo" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="digitalMarketing" title="Digital Marketing">
                <div style={{ padding: 10 }}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={makeIdeasHappenHoverOver} onMouseLeave={makeIdeasHappenHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={makeIdeasHappenClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Make Ideas Happen</h5>
                                            <p className={classes.OverlayText}>A local paper with big ideas needed a sharp new brand to inspire</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={MakeIdeasHappen} className="w-100 m-0 p-0" alt="Make Ideas Happen" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={4} className="my-2 p-2" onMouseEnter={riderHoverOver} onMouseLeave={riderHoverLeave}>
                                <div className="m-0 p-0">
                                    <div className={riderClass.join(' ')}>
                                        <div className={classes.OverlayContent}>
                                            <h5>Rider</h5>
                                            <p className={classes.OverlayText}>A cartoon guy riding a mini bike. Again, example text</p>
                                            <p className={classes.FullProject}>Full Project</p>
                                        </div>
                                    </div>
                                    <img src={Rider} className="w-100 m-0 p-0" alt="Rider" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
        </Tabs>
    );
}

export default TabNavigate;