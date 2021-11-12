import React from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div>
                <Link to="/"><img class="logo" src={logo} alt="logo" /></Link>
            </div>
            <div>
                <Link to="/portfolio">portfolio</Link>
                <Link to="/aboutUs">about us</Link>
                <Link to="/contact">contact</Link>
                <Link to="/portfolio">see our portfolio</Link>
            </div>
        </footer>
    );
}

export default Footer