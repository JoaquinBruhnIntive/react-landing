import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    return(
        <>
            <nav>
                <div className="logo-container">
                    <Link to="/"><img class="logo" src={logo} alt="logo" /></Link>
                </div>
                <div className={isActive ? "nav-link-list show" : "nav-link-list"}>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/aboutUs">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className={isActive ? "hamburguer clicked" : "hamburguer"}
                onClick={toggleClass}
                >
                    <div className="burger-line line1"/>
                    <div className="burger-line line2"/>
                    <div className="burger-line line3"/>
                </div>
            </nav>
        </>
    );
}

export default Navbar