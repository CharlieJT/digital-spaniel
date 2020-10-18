import React from 'react';
import classes from './SideDrawer.css';
import NavbarItems from '../../Layout/Navbar/NavbarItems/NavbarItems';

const SideDrawer = ({ sideDrawerOpen, closed }) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (sideDrawerOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={attachedClasses.join(' ')}>
            <NavbarItems display="block" />
        </div>
    );
}

export default SideDrawer
