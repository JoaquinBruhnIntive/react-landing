import React, { useState } from "react";
import './heroSlide.css'


const HeroSlide = ({ slideData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    function toggleSlide (slideNumber){
            setCurrentSlide(slideNumber);
    }


    return (
        <div className={slideData[currentSlide].class}>{slideData[currentSlide].test}
          <div>
              {slideData.map((slide, index) => <button className="buttonController" onClick={() => toggleSlide(index)}>{index + 1}</button>)}
          </div> 
        </div>
    );
}

export default HeroSlide;