import { Link } from 'react-router-dom';
import arrow from '../../../assets/white_arrow.png'

import './featured.css'



const Featured = () => {
    return (
        <section className="featured">
            <div>
                <h2>Featured</h2>
                <Link to="/">See All <img src={arrow} alt="arrow right" /></Link>
            </div>
            <div>
                <div>
                    <div>
                        <h3>project del sol</h3>
                        <p>view all projects</p>
                        <div>1</div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>228B tower</h3>
                        <p>view all projects</p>
                        <div>2</div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>le prototipe</h3>
                        <p>view all proyects</p>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured