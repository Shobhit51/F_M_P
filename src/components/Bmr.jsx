import React, { useState } from 'react';
import './Home.css';
import FormContainer from "../components/FormContainer";
import logo4 from "../assets/test.avif";

const Bmr = () => {
    const [heightValue, setHeightValue] = useState(''); 
    const [weightValue, setWeightValue] = useState(''); 
    const [bmiValue, setBmiValue] = useState(''); 
    const [bmiMessage, setBmiMessage] = useState(''); 

    const calculateBmi = (e) => { 
        e.preventDefault(); // Prevent form submission
        if (heightValue && weightValue) { 
            const heightInMeters = heightValue / 100; 
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
            setBmiValue(bmi); 

            let message = ''; 
            if (bmi < 18.5) { 
                message = 'You are Underweight'; 
            } else if (bmi >= 18.5 && bmi < 25) { 
                message = 'You are Normal weight'; 
            } else if (bmi >= 25 && bmi < 30) { 
                message = 'You are Overweight'; 
            } else { 
                message = 'You are Obese'; 
            } 
            setBmiMessage(message); 
        } else { 
            setBmiValue(''); 
            setBmiMessage(''); 
        } 
    }; 

    return ( 
		<div class="share section bd-container" id="share">
      <div  class="share__container bd-grid">
	  <div class="share__img ">
                        <img src={logo4} alt=""></img>
            </div>
            <FormContainer >
                <h1 className="form-title"> BMI Calculator</h1>
                <form className="form" onSubmit={calculateBmi}>
                    <div> 
                        <label>Enter Your Height (cm):</label> 
                        <input 
                            type="number"
                            id="height"
                            className="input-field"
                            value={heightValue} 
                            onChange={(e) => setHeightValue(e.target.value)} 
                        /> 
                    </div> 
                    <div> 
                        <label>Enter Your Weight (kg):</label> 
                        <input 
                            type="number"
                            id="weight"
                            className="input-field"
                            value={weightValue} 
                            onChange={(e) => setWeightValue(e.target.value)} 
                        /> 
                    </div> 
                    <button className="btn" type="submit"> 
                        Calculate BMI 
                    </button> 
                    {bmiValue && bmiMessage && ( 
                        <div className="result-i"> 
                            <p> 
                                Your BMI: <span className="bmi-value">{bmiValue}</span> 
                            </p> 
                            <p> 
                                Result: <span className="bmi-message">{bmiMessage}</span> 
                            </p> 
                        </div> 
                    )} 
                </form>
            </FormContainer> 
			</div>
			
        </div>
    ); 
} 

export default Bmr;
