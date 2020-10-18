import React from 'react';
import classes from './NavbarItem.css';

const NavbarItem = ({ name, link, colour, display }) => {
    return (
        <a href={link} className={[classes.NavbarItem, "mx-auto mx-lg-2"].join(' ')} style={{ color: colour, display: display }}>{name}</a>
    );
}

export default NavbarItem;