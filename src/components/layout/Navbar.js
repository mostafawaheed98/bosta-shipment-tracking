import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/bosta-logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">
                 <img src={logo} alt="لوجو  بوسطه"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" to="home">الرئيسية</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="pricing">الأسعار</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="contact-sales">كلم المبيعات</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">تتبع شحنتك</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link border-start border-2" to="login">تسجيل الدخول</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="home">ENG</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;