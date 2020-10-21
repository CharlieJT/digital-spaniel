import React from 'react';
import classes from './Spinner.css';
import DigitalSpanielFavicon from '../../../media/images/digitalSpanielFavicon.png';

const spinner = (props) => (
    <>
        <div>
            <img src={DigitalSpanielFavicon} className={classes.SpanielIcon}  alt="Digital Spaniel Favicon"/>
        </div>
        <div style={{ fontSize: `${props.fontSize}` }} className={classes.Loader}>Loading...</div>
    </>
);

export default spinner;
