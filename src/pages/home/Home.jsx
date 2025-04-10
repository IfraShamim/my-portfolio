import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'

const Home = () => {
    return (
        <section className="home sectiom grid">
            <img src={Profile} alt="" className="home__img" />
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Ifra Shamim.</span>&nbsp;
                        Frontend Developer
                    </h1>
                    <p className="home__description">
                        Passionate Frontend Developer crafting responsive, user-friendly, 
                        and visually engaging web experiences with HTML, CSS, JavaScript, 
                        and modern frameworks.
                    </p>
                    <Link to='/about' className='button'>
                    More About Me{' '}
                    <span className="button__icon">
                        <FaArrowRight />
                    </span>
                    </Link>
                </div>
            </div>
            <div className="color__block"></div>
        </section>
    )
}

export default Home