import blackArrow from '../../../assets/black__arrow.png'

import "./contactDetails.css";

const ContacrDetails = () => {
    return (
        <section className="contact-details">
            <h2>Contact Details</h2>
            <div>
                <div>
                    <div>
                        <h3>Main Office</h3>
                        <div>
                            <div>
                                <p>Mail:</p>
                                <p>Address:</p>
                                <p>Phone:</p>
                            </div>
                            <div>
                                <p>archone@mail.com</p>
                                <p>1892 Chenoweth Drive TN</p>
                                <p>802-456-3451</p>
                            </div>
                        </div>
                    </div>
                    <h3>View on map <img src={ blackArrow } alt="" /></h3>
                </div>
                <div>
                    <div>
                        <h3>Office II</h3>
                        <div>
                            <div>
                                <p>Mail:</p>
                                <p>Address:</p>
                                <p>Phone:</p>
                            </div>
                            <div>
                                <p>archtwo@mail.com</p>
                                <p>3399 Wines Lane TX</p>
                                <p>832-145-4321</p>
                            </div>
                        </div>
                    </div>
                    <h3>View on map <img src={ blackArrow } alt="" /></h3>
                </div>
            </div>
        </section>
    )
}

export default ContacrDetails