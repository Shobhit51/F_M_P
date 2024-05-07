import React from 'react'
// import './Navbarcss.css'
import { Link } from 'react-router-dom';
import './Home.css'


const Navbar = ({ isAuthenticated }) => {
    return (
        <div>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <a href="#" className="nav__logo">SHAPE-UP</a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="home" className="nav__link active-link">Home</a></li>
                            <li className="nav__item"><a href="exercise" className="nav__link">Exercise</a></li>
                            <li className="nav__item"><a href="NutritionCheck" className="nav__link">Nutrition</a></li>
                            <li className="nav__item"><a href="Health" className="nav__link">Health-Metrics</a></li>
                            <li className="nav__item"><a href="Register" className="nav__link">Register</a></li>
                            
                            <br></br>
                            <li>
                                {isAuthenticated ? (
                                    <li className="nav__item"><a href="Logout" className="nav__link"> Logout</a></li>
                                ) : (
                                    <li className="nav__item"><a href="Login" className="nav__link"> Login </a></li>
                                )}
                            </li>

                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-grid-alt'></i>
                    </div>
                </nav>
            </header>
            {/* <div class="header">
    <a href="#" class="logo">SHAPE UP</a>
    <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#Skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#cv">Resume</a>
    </nav>
    </div> */}
        </div>

    );
}

export default Navbar
