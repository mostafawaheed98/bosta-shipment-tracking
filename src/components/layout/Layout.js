import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
    return (
        <>
            <Navbar/>
            <div className='container mt-3'>
                <Outlet/>
            </div>
            <Footer />
        </>
    );
}

export default Layout;