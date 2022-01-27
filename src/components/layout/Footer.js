import React from 'react';

function Footer() {
    const date  = new Date();
    return (
        <footer className="fixed-bottom py-3 bg-dark text-center">
            <div className="container">
                <span className="text-light">جميع الحقوق محفوظة © {date.getFullYear()} - بوسطة </span>
            </div>
        </footer>
    );
}

export default Footer;