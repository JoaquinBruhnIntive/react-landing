import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './heroSlide.css'


const HeroSlide = ({ slideData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    function toggleSlide (slideNumber){
            setCurrentSlide(slideNumber);
    }


    return (
            <div className={slideData[currentSlide].class}>
                <div className="hero-content">
                    <h2>Project</h2>
                    <h2>Paramount</h2>
                    <p>
                        Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
                    </p>
                    <Link to="/portfolio">see our portfolio</Link>
                </div>
                <div className="buttonController">
                    {slideData.map((slide, index) => <button onClick={() => toggleSlide(index)}>0{index + 1}</button>)}
                </div> 
            </div>
    );
}

export default HeroSlide;