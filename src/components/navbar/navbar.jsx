import React from 'react';
import { Link } from 'react-router-dom';
import hamburguer from '../../assets/icons/icon-hamburger.svg';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
    console.log(hamburguer)
    return(
        <>
            <nav>
                <Link to="/">Arch</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="mobile-navbar">
                <div>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <label for="navlist"><img src={hamburguer} alt="hamburguer menu" /></label>
                </div>
                <div>
                    <input type="checkbox" id="navlist" />
                    <div className="sidebar">
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/aboutUs">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar