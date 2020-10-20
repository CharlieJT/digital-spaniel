import React, { useState } from 'react';
import { Tabs } from "@feuer/react-tabs";
import { Container, Row, Col } from 'react-bootstrap';
import classes from './TabNavigate.css';
import Whellies from '../../../../media/images/whellies01.png';
import MakeIdeasHappen from '../../../../media/images/newspaper02.png';
import TescosFinest from '../../../../media/images/makerek.png';
import Dinamo from '../../../../media/images/newspaper.png';
import Rider from '../../../../media/images/rider01.png';
import Aux from '../../../../hoc/ReactAux';

const TabNavigate = () => {

    // Create state true or false for each project when hovered over (setting to true on mouse enter & false on mouse leave), classes are then 
    // created & active state is apended to the class name depending on if a specific state is true or false

    // If I had more time with this one, I would have made state management more dynatic.

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

    // Data held for each project item in the tabs section

    const tabsNavigateData = [
        {
            title: "Whellies",
            xsDisplay: 12,
            smDisplay: 6,
            lgDisplay: 4,
            mouseEnter: whelliesHoverOver,
            mouseLeave: whelliesHoverLeave,
            tabClass: whelliesClass,
            image: Whellies,
            overlayText: "The place to go for the best whellies, come &amp; see for yourself",
            category: "Web Design"
        },
        {
            title: "Make Ideas Happen",
            xsDisplay: 12,
            smDisplay: 6,
            lgDisplay: 4,
            mouseEnter: makeIdeasHappenHoverOver,
            mouseLeave: makeIdeasHappenHoverLeave,
            tabClass: makeIdeasHappenClass,
            image: MakeIdeasHappen,
            overlayText: "A local paper with big ideas needed a sharp new brand to inspire",
            category: "Digital Marketing"
        },
        {
            title: "Tescos Finest",
            xsDisplay: 12,
            smDisplay: 6,
            lgDisplay: 4,
            mouseEnter: tescosFinestHoverOver,
            mouseLeave: tescosFinestHoverLeave,
            tabClass: tescosFinestClass,
            image: TescosFinest,
            overlayText: "Tescos only delivers the best quality products at the right price",
            category: "Branding"
        },
        {
            title: "Dinamo",
            xsDisplay: 12,
            smDisplay: 12,
            lgDisplay: 8,
            mouseEnter: dinamoHoverOver,
            mouseLeave: dinamoHoverLeave,
            tabClass: dinamoClass,
            image: Dinamo,
            overlayText: "I've never heard of Dinamo before so this is just example text",
            category: "Web Design"
        },
        {
            title: "Rider",
            xsDisplay: 12,
            smDisplay: 6,
            lgDisplay: 4,
            mouseEnter: riderHoverOver,
            mouseLeave: riderHoverLeave,
            tabClass: riderClass,
            image: Rider,
            overlayText: "A cartoon guy riding a mini bike. Again, example text",
            category: "Digital Marketing"
        },
    ]

    return (
        <Tabs
            tabsProps={{
                style: {
                    textAlign: "left",
                }
            }}
            activeTab={{
                id: "all"
            }}
        >
            <Tabs.Tab id="all" title="All" >
                <div style={{ padding: 10 }}>
                    <Container>
                        <Row>
                            {tabsNavigateData.map(TabDataItem => {
                                const { xsDisplay, smDisplay, lgDisplay, mouseEnter, mouseLeave, tabClass, title, overlayText, image } = TabDataItem;
                                return (
                                    <Col
                                        key={title}
                                        xs={xsDisplay} 
                                        sm={smDisplay} 
                                        lg={lgDisplay} 
                                        className="my-2 p-2" 
                                        onMouseEnter={mouseEnter} 
                                        onMouseLeave={mouseLeave}>
                                        <div className="m-0 p-0">
                                            <div className={tabClass.join(' ')}>
                                                <div className={classes.OverlayContent}>
                                                    <h5>{title}</h5>
                                                    <p className={classes.OverlayText}>{overlayText}</p>
                                                    <p className={classes.FullProject}>Full Project</p>
                                                </div>
                                            </div>
                                            <img src={image} className="w-100 m-0 p-0" alt={title} />
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="branding" title="Branding">
                <div style={{ padding: 10 }}>
                <Container>
                        <Row>
                            {tabsNavigateData.map(TabDataItem => {
                                const { xsDisplay, smDisplay, lgDisplay, mouseEnter, mouseLeave, tabClass, title, overlayText, image, category } = TabDataItem;
                                return (
                                    <Aux key={title}>
                                        {category === "Branding" ?
                                        <Col
                                            key={title}
                                            xs={xsDisplay} 
                                            sm={smDisplay} 
                                            lg={lgDisplay} 
                                            className="my-2 p-2" 
                                            onMouseEnter={mouseEnter} 
                                            onMouseLeave={mouseLeave}>
                                            <div className="m-0 p-0">
                                                <div className={tabClass.join(' ')}>
                                                    <div className={classes.OverlayContent}>
                                                        <h5>{title}</h5>
                                                        <p className={classes.OverlayText}>{overlayText}</p>
                                                        <p className={classes.FullProject}>Full Project</p>
                                                    </div>
                                                </div>
                                                <img src={image} className="w-100 m-0 p-0" alt={title} />
                                            </div>
                                        </Col> : null}
                                    </Aux>
                                    )
                                })}
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="webDesign" title="Web Design">
                <div style={{ padding: 10 }}>
                    <Container>
                        <Row>
                            {tabsNavigateData.map(TabDataItem => {
                                const { xsDisplay, smDisplay, lgDisplay, mouseEnter, mouseLeave, tabClass, title, overlayText, image, category } = TabDataItem;
                                return (
                                    <Aux key={title}>
                                        {category === "Web Design" ?
                                        <Col
                                            key={title}
                                            xs={xsDisplay} 
                                            sm={smDisplay} 
                                            lg={lgDisplay} 
                                            className="my-2 p-2" 
                                            onMouseEnter={mouseEnter} 
                                            onMouseLeave={mouseLeave}>
                                            <div className="m-0 p-0">
                                                <div className={tabClass.join(' ')}>
                                                    <div className={classes.OverlayContent}>
                                                        <h5>{title}</h5>
                                                        <p className={classes.OverlayText}>{overlayText}</p>
                                                        <p className={classes.FullProject}>Full Project</p>
                                                    </div>
                                                </div>
                                                <img src={image} className="w-100 m-0 p-0" alt={title} />
                                            </div>
                                        </Col> : null}
                                    </Aux>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="digitalMarketing" title="Digital Marketing">
                <div style={{ padding: 10 }}>
                    <Container>
                        <Row>
                            {tabsNavigateData.map(TabDataItem => {
                                const { xsDisplay, smDisplay, lgDisplay, mouseEnter, mouseLeave, tabClass, title, overlayText, image, category } = TabDataItem;
                                return (
                                    <Aux key={title}>
                                        {category === "Digital Marketing" ?
                                        <Col
                                            key={title}
                                            xs={xsDisplay} 
                                            sm={smDisplay} 
                                            lg={lgDisplay} 
                                            className="my-2 p-2" 
                                            onMouseEnter={mouseEnter} 
                                            onMouseLeave={mouseLeave}>
                                            <div className="m-0 p-0">
                                                <div className={tabClass.join(' ')}>
                                                    <div className={classes.OverlayContent}>
                                                        <h5>{title}</h5>
                                                        <p className={classes.OverlayText}>{overlayText}</p>
                                                        <p className={classes.FullProject}>Full Project</p>
                                                    </div>
                                                </div>
                                                <img src={image} className="w-100 m-0 p-0" alt={title} />
                                            </div>
                                        </Col> : null}
                                    </Aux>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </Tabs.Tab>
        </Tabs>
    );
}

export default TabNavigate;