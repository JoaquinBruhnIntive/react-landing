import React from "react";
import HeroSlide from "./heroSlide/heroSlide";
import heroCard from './heroData';
import './hero.css';


const Hero = () => {
    return (
        <section className="hero">
            <HeroSlide slideData={heroCard}/>
        </section>
    )
}

export default Hero