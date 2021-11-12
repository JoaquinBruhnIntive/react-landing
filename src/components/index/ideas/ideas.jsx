import { Link } from 'react-router-dom';
import arrow from '../../../assets/white_arrow.png'

import './ideas.css';

const Ideas = () => {
    return (
        <section className="ideas">
            <div>
                <h2>Small team, big ideas</h2>
                <Link to="/aboutUs">About Us <img src={arrow} alt="right arrow" /></Link>
            </div>
        </section>
    )
}

export default Ideas