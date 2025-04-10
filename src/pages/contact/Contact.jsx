import React from 'react'
import { FaEnvelopeOpen,FaPhoneSquareAlt,FaFacebookF,FaInstagram,FaGithub,FaLinkedinIn } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'
const Contact = () => {
  return (
    <section className="section contact">
        <h2 className="section__title">
            Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
            <div className="contact__data">
                <h3 className="contact__title">Don't be Shy !</h3>

                <p className="contact__description">
                    Feel free to get in touch with me. I am always to open discussing 
                    new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="contact__info">
                    <div className="info__item">
                        <FaEnvelopeOpen className='info__icon' />

                        <div>
                            <span className="info__title">Mail me</span>
                            <h4 className="info__desc">ifrashamim29@gmail.com</h4>
                        </div>
                    </div>

                    <div className="info__item">
                        <FaPhoneSquareAlt className='info__icon' />

                        <div>
                            <span className="info__title">Call me</span>
                            <h4 className="info__desc">03112507543</h4>
                        </div>
                    </div>
                </div>

                <div className="contact__socials">
                    <a href="https://www.facebook.com/ifra.shamim.54/" className="contact__social-link">
                    <FaFacebookF />
                    </a>

                    <a href="https://github.com/IfraShamim" className="contact__social-link">
                    <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/ifrashamim/" className="contact__social-link">
                    <FaLinkedinIn />
                    </a>

                    <a href="https://www.instagram.com/ifra.shamim.54/?utm_source=qr&igsh=MWVnbm1tNW5iMGkyMQ%3D%3D#" className="contact__social-link">
                    <FaInstagram />
                    </a>
                </div>
            </div>

            <form className="contact__form">
                <div className="form__input-group">
                    <div className="form__input-div">
                        <input type="text" placeholder='Your name' className="form__control" />
                    </div>

                    <div className="form__input-div">
                        <input type="email" placeholder='Your email' className="form__control" />
                    </div>

                    <div className="form__input-div">
                        <input type="text" placeholder='Your Subject' className="form__control" />
                    </div>
                </div>

                <div className="form__input-div">
                    <textarea placeholder='Your Message' cols='30' rows='10' className='form__control textarea'></textarea>
                </div>

                <button className="button">
                    Send Message
                    <span className="button__icon contact__button-icon">
                        <FiSend />
                    </span>
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact