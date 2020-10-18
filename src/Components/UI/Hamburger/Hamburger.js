import React from 'react';
import classes from './Hamburger.css';

const Hamburger = ({ clicked }) => {
    return (
        <div className={classes.Hamburger} onClick={clicked}>
            <div className={classes.HamburgerIcon}></div>
        </div>
    );
}

export default Hamburger;