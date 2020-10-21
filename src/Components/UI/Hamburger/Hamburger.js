import React from 'react';
import classes from './Hamburger.css';

const Hamburger = ({ clicked, open }) => {

    // Hamburger icons which check the prop state "open" to append a certain class to the classes array & style the burger icon accordingly

    let iconOneClass = [classes.HamburgerIconOne, classes.HamburgerIconOneClose];
    let iconTwoClass = [classes.HamburgerIconTwo, classes.HamburgerIconTwoClose];
    let iconThreeClass = [classes.HamburgerIconThree, classes.HamburgerIconThreeClose];

    if (open) {
        iconOneClass = [classes.HamburgerIconOne, classes.HamburgerIconOneOpen];
        iconTwoClass = [classes.HamburgerIconTwo, classes.HamburgerIconTwoOpen];
        iconThreeClass = [classes.HamburgerIconThree, classes.HamburgerIconThreeOpen];
    }
    
    return (
        <div className={classes.Hamburger} onClick={clicked}>
            <div className={iconOneClass.join(' ')}></div>
            <div className={iconTwoClass.join(' ')}></div>
            <div className={iconThreeClass.join(' ')}></div>
        </div>
    );
}

export default Hamburger;