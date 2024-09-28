import React from 'react';
import './Header.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p className='py-4'>© {year} Yellow. All rights reserved.</p>
            <p> Made with ❤️ by Hassaan Siddique </p>
        </div>
    );
}

export default Footer;
