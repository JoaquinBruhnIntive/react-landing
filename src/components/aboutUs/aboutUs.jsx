import AboutHero from "./aboutHero/aboutHero";
import AboutHeritage from "./aboutHeritage/aboutHeritage";
import AboutLeaders from "./aboutLeaders/aboutLeaders";


import "./aboutUs.css"

const AboutUs = () =>{
    return(
        <section>
            <AboutHero />
            <AboutHeritage />
            <AboutLeaders />
        </section>
    )
}
export default AboutUs