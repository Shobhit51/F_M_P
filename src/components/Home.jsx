import React from 'react'
import banner from "../assets/banner.png";
import logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';
import logo2 from "../assets/Logo2.png";

import logo3 from "../assets/imag2.jpg";
import './Home.css'
function Home() {
    return (
        <div>

            <div className="home" id="home">
           
                <div className="home__container bd-container bd-grid">
                    <div class="home__img">
                        <img src={banner} alt=""></img>
                    </div>

                    <div class="home__data">
                        <h1 class="home__title">SHAPE-UP</h1>
                        <p class="home__description">We are here to help you to achieve your fitness dreams.</p>

                        <Link to="/register" className="button">Get Started</Link>
                    </div>
                </div>
            </div>

            <div class="share section bd-container" id="share">
                <div class="share__container bd-grid">
                    <div class="share__data">
                        <h2 class="section-title-center">Why Choose us </h2>
                        <p class="share__description">Our goal is to guide you to success while giving you the tools that will allow you to thrive! </p>
                        <Link to="/register" className="button">Start Your Journey</Link>
                    </div>

                    <div class="share__img">
                        <img src={logo3} alt=""></img>
                    </div>
                </div>
            </div>

            <section class="decoration section bd-container" id="decoration">
                <h2 class="section-title">Tools <br></br> For Your Goals</h2>
                <div class="decoration__container bd-grid">
                    <div class="decoration__data">
                        <img src={logo} alt="" class="decoration__img"></img>
                        <h3 class="decoration__title">Exercise DataBase</h3>
                        <Link to="/login" className="button">Check More</Link>
                    </div>

                    <div class="decoration__data">
                        <img src={logo2} alt="" class="decoration__img"></img>
                        <h3 class="decoration__title">Meal Planner</h3>
                        <Link to="/login" className="button">Check More</Link>
                    </div>

                    <div class="decoration__data">
                        <img src={logo} alt="" class="decoration__img"></img>
                        <h3 class="decoration__title">Nutrition</h3>
                        <Link to="/login" className="button">Check More</Link>
                    </div>

                </div>
            </section>


            <footer class="footer section">
                <div class="footer__container bd-container bd-grid">
                    <div class="footer__content">
                    {/* <h3 class="footer__title">
                        <a href="#" class="footer__logo">Shape up</a>
                    </h3>
                    <p class="footer__description">I sent a gift and it gives <br></br> happiness</p> */}
                </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Our Services</h3>
                        <ul>
                            <li>  <Link to="/exercise">Exercise log</Link></li>
                            <li>  <Link to="/NutritionCheck">Nutrition chart</Link></li>
                            <li>  <Link to="/Health">BMR index metrics</Link></li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Our Company</h3>
                        <ul>
                            <li>  <Link to="">Blog</Link></li>
                            <li>  <Link to="">About Us</Link></li>
                            <li>  <Link to="">Our Mission</Link></li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Social</h3>
                        <ul>
                            <li><a href="#" class="footer__social"><i class='bx bxl-facebook-circle '></i>Facebook</a></li>
                            <li><a href="#" class="footer__social"><i class='bx bxl-twitter'></i>Instagram</a></li>
                            <li><a href="#" class="footer__social"><i class='bx bxl-instagram-alt'></i>Twitter</a></li>
                        </ul>
                    </div>
                </div>



                <p class="footer__copy">&#169; 2023 Major Prooject . All right reserved</p>
                <p class="footer__copy">&#169;Developers:Shobhit Shrivastva & Rishabh Shrivastava</p>
            </footer>


        </div>
    )
}

export default Home
