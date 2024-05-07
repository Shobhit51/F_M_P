import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import './Home.css'
import logo3 from "../assets/imag2.jpg";
import d1 from "../assets/d1.jpg"
import d2 from "../assets/download.jpg"
import duck from "../assets/Calorie.jpg"
import clock from "../assets/clock.jpg";
import { Link } from 'react-router-dom';


import Navbar from "./Navbar";

function Dashboard() {
    const { token, loading } = useContext(AuthContext);
    if (loading) {
      return null;
    }

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Navbar  isAuthenticated={!!token}></Navbar>
            
            <div class="share section bd-container" id="share">
                <div class="share__container bd-grid">
                    <div class="share__data">
                        <h2 class="section-title-center">Calculate Calories</h2>
                        <p class="share__description">A calories calculator is essential for monitoring daily energy intake, helping individuals make informed dietary choices and maintain a balanced lifestyle.  </p>
                        <Link to="/Diet" className="button">Click Now  </Link>
                    </div>

                    <div class="share__img">
                        <img src={duck} alt=""></img>
                    </div>
                </div>
            </div>
            <div class="share section bd-container" id="share">

                <div class="share__container bd-grid">
                    <div class="share__data">
                        <h2 class="section-title-center">Meal Planner </h2>
                        <p class="share__description">
                            A meal planner simplifies healthy eating by organizing daily or weekly meals, facilitating balanced nutrition and efficient grocery shopping </p>
                        <Link to="/Mealbase" className="button">Click Now</Link>
                    </div>
                    <div class="share__img">
                        <img src={d2} alt=""></img>
                    </div>

                </div>
            </div>
            <div class="share section bd-container" id="share">
                <div class="share__container bd-grid">
                    <div class="share__data">
                        <h2 class="section-title-center">Your Favourite Meal </h2>
                        <p class="share__description"> Healthy Meal promotes consistency in dietary habits and empowers individuals to reach their wellness goals with ease and structure. </p>
                        <Link to="/Mealpart" className="button">CLick Now</Link>

                    </div>

                    <div class="share__img">
                        <img src={logo3} alt=""></img>
                    </div>
                </div>
            </div>

            <div class="share section bd-container" id="share">

                <div class="share__container bd-grid">

                    <div class="share__img">
                        <img src={clock} alt=""></img>
                    </div>
                    <div class="share__data">
                        <h2 class="section-title-center">Exercise/Running  Timer </h2>
                        <p class="share__description">It's a vital tool for maintaining consistency, optimizing workouts, and achieving overall health and wellness.</p>
                        <Link to="/RunningTimer" className="button">Click Now</Link>
                    </div>

                </div>
            </div>

            <div class="share section bd-container" id="share">

                <div class="share__container bd-grid">
                    <div class="share__data">
                        <h2 class="section-title-center">Exercise DB </h2>
                        <p class="share__description">
                            An exercise tracker helps individuals stay on top of their fitness goals by monitoring activity levels, providing motivation, and offering insights into progress. </p>
                        <Link to="/exercise" className="button">Click Now</Link>
                    </div>
                    <div class="share__img">
                        <img src={d1} alt=""></img>
                    </div>
                </div>
            </div>




        </>

    );
}

export default Dashboard;