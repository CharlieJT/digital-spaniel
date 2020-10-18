import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';

const NavbarItems = ({ display }) => {

    const navbarItems = {
        // Navbar items go here including name & link 
        // (in a real application, the link would be the url to specific pages which would be set up with React Router)
        services: {
            name: "Services",
            link: "#"
        },
        work: {
            name: "Work",
            link: "#"
        },
        about: {
            name: "About",
            link: "#"
        },
        blog: {
            name: "Blog",
            link: "#"
        },
        Contact: {
            name: "Contact",
            link: "#"
        },
    };

    // Initialize an array & push navbar items into a new array  
    const navbarArray = [];

    for (let i in navbarItems) {
        navbarArray.push({
            name: navbarItems[i].name,
            link: navbarItems[i].link
        });
    }

    return (
        <div>
            {navbarArray.map(navbarItem => (
                <NavbarItem key={navbarItem.name} name={navbarItem.name} link={navbarItem.link} display={display}/>
            ))}
        </div>
    );
}

export default NavbarItems;