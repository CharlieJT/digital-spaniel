import React from 'react';
import classes from './NavbarItem.css';

const NavbarItem = ({ name, link }) => {
    return (
        <a href={link} className={classes.NavbarItem}>{name}</a>
    );
}

export default NavbarItem;