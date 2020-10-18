import React from 'react';
import classes from './NavbarItem.css';

const NavbarItem = ({ name, link, display, clicked, colour }) => {
    return (
        <a 
            href={link} 
            className={[classes.NavbarItem, "my-3 my-lg-0"].join(' ')}
            onClick={clicked}
            style={{
                display: display,
                color: colour
            }}>{name}</a>
    );
}

export default NavbarItem;