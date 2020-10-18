import React from 'react';
import Navbar from '../../Components/Layout/Navbar/Navbar';
import Footer from '../../Components/Layout/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
                {children}
            <Footer />
        </>
    );
}

export default Layout;