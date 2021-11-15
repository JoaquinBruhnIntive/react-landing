import richardsImg from "../../../assets/about/desktop/avatar-jake.jpg";
import smithImg from "../../../assets/about/desktop/avatar-thompson.jpg";
import rourkeImg from "../../../assets/about/desktop/avatar-jackson.jpg";
import simpsonImg from "../../../assets/about/desktop/avatar-maria.jpg";
import twitter from "../../../assets/icons/icon-twitter.svg";
import linkedin from "../../../assets/icons/icon-linkedin.svg";

import "./aboutLeaders.css"

const AboutLeaders = () => {
    return (
        <section className="about-leaders">
            <h2>The Leaders</h2>
            <div>
                <div>
                    <img src={ richardsImg } alt="" />
                    <h3>Jake Richards</h3>
                    <p>Chief Architect</p>
                    <a href=""><img src={ linkedin } alt="" /></a><a href=""><img src={ twitter } alt="" /></a>
                </div>
                <div>
                    <img src={ smithImg } alt="" />
                    <h3>Thompson Smith</h3>
                    <p>Head of Finance</p>
                    <a href=""><img src={ linkedin } alt="" /></a><a href=""><img src={ twitter } alt="" /></a>
                </div>
                <div>
                    <img src={ rourkeImg } alt="" />
                    <h3>Jackson Rourke</h3>
                    <p>Lead Designer</p>
                    <a href=""><img src={ linkedin } alt="" /></a><a href=""><img src={ twitter } alt="" /></a>
                </div>
                <div>
                    <img src={ simpsonImg } alt="" />
                    <h3>Maria Simpson</h3>
                    <p>Senior Architect</p>
                    <a href=""><img src={ linkedin } alt="" /></a><a href=""><img src={ twitter } alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default AboutLeaders