import React from "react";
import HeroSlide from "./heroSlide/heroSlide";
import heroCard from './heroData';
import './hero.css';


const Hero = () => {
    return (
        <section>
            <div className="sliders">
                <HeroSlide slideData={heroCard}/>
            </div>
        </section>
    )
}

export default Hero