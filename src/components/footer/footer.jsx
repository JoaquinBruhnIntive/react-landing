import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <Link to="/">Arch</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/contact">Contact</Link>
        </footer>
    );
}

export default Footer