import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='py-3 text-center'>
            &copy; All right reserved {year}
        </footer>
    );
};

export default Footer;