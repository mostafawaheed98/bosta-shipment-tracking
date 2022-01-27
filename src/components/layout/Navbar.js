import React from 'react';

import logo from '../../assets/images/bosta-logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
            <div className="container">
                <a className="navbar-brand" href="#">
                 <img src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">الرئيسية</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">الأسعار</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">كلم المبيعات</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#">تتبع شحنتك</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link border-start border-2" href="#">تسجيل الدخول</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">ENG</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;