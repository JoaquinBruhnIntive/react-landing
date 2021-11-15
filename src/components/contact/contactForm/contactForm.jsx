import rightArrow from '../../../assets/white_arrow.png'

import "./contactForm.css";

const ContactForm = () => {
    return (
        <section className="contact-form">
            <h2>Connect with us</h2>
            <div>
                <input type="text" placeholder="Name" />
                <input type="text"  placeholder="Email" />
                <label htmlFor="textarea">
                    Message
                    <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                </label>
                <button><img src={ rightArrow } alt="" /></button>
            </div>
        </section>
    )
}

export default ContactForm