import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import './Home.css'
import FormContainer from "../components/FormContainer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/auth/Login", {
        username,
        password,
        email,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
       <FormContainer className="d-flex justify-content-center  " >
      <h2 className="form-title">Login</h2>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-field"
        />
        <br />
         <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input-field"
        />
         <br />
        <input
          type="password"
          value={password}
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
         <br />
        <button type="submit"  className="btn button btn-success w-100 rounded-0">Login</button>
      </form>
      </FormContainer>
    </div>
  );
};

export default Login;
// // LoginForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useUserContext } from '../context/UserContext';
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import FormContainer from "../components/FormContainer";
// // import Dashboard from '../loggedin/Dashboard';

// const Login= () => {
//   const { setUserInfo } = useUserContext();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     axios.post("http://127.0.0.1:3000/Login", formData)
//       .then(response => {
//         console.log(response);
//         if(response.data === "Success"){
//             setUserInfo(response.data.user)
//                         navigate("/Dashboard")
                    
//         // if (response.data.success) { // Assuming your backend returns a 'success' property
//         // //   setUserInfo(response.data.user);
//         //   navigate("/Meal");
//         } else {
//           navigate("/register");
//           alert("You are not registered to this service");
//         }
//       })
//       .catch(err => console.log(err));
//   };
  
  
//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//         <div className="bg-white p-3 rounded w-25">
//         <FormContainer className="d-flex justify-content-center">
//             <h2><center>Login</center></h2>
            
//             <form onSubmit={handleSubmit}>
                
//                 <div className="mb-3">
//                     <label >
//                         <strong>Email</strong>
//                     </label>
//                     <input type="text" 
//                     placeholder='Enter Email' 
//                     autoComplete='off' 
//                     name='email' 
//                     className='form-control rounded-0' 
//                     value={formData.email} 
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label >
//                         <strong>Password</strong>
//                     </label>
//                     <input type="password" 
//                     placeholder='Enter Password' 
//                     name='password' 
//                     className='form-control rounded-0' 
//                     value={formData.password} 
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success w-100 rounded-0">
//                     Login
//                 </button>
//                 </form>
//                 <p>Don't have an account?</p>
//                 <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Sign Up
//                 </Link>
                
//         </FormContainer>
            
//         </div>
//     </div>
//   );
// };
 

// export default Login;


// //2nd/////////////////////////////////////////////////////////////////////////


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from 'axios'
// // import FormContainer from "../components/FormContainer";
// // import { useNavigate } from "react-router-dom";

// // function Login() {    

// //     const [email, setEmail] = useState()
// //     const [password, setPassword] = useState()
// //     const navigate = useNavigate()

//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     axios.post("http://127.0.0.1:3000/Login", { email, password })
//     //     .then(result => {
//     //         console.log(result)
//     //         if(result.data === "Success"){
//     //             navigate("/Meal")
//     //         }else{
//     //             navigate("/register")
//     //             alert("You are not registered to this service")

//     //         }
       
//     //     })
//     //     .catch(err => console.log(err))
//     // }


// //   return (
// //     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
// //         <div className="bg-white p-3 rounded w-25">
// //         <FormContainer className="d-flex justify-content-center">
// //             <h2><center>Login</center></h2>
            
// //             <form onSubmit={handleSubmit}>
                
// //                 <div className="mb-3">
// //                     <label htmlFor="email">
// //                         <strong>Email</strong>
// //                     </label>
// //                     <input type="text" 
// //                     placeholder='Enter Email' 
// //                     autoComplete='off' 
// //                     name='email' 
// //                     className='form-control rounded-0' 
// //                     onChange={(e) => setEmail(e.target.value)}

// //                     />
// //                 </div>
// //                 <div className="mb-3">
// //                     <label htmlFor="email">
// //                         <strong>Password</strong>
// //                     </label>
// //                     <input type="password" 
// //                     placeholder='Enter Password' 
// //                     name='password' 
// //                     className='form-control rounded-0' 
// //                     onChange={(e) => setPassword(e.target.value)}

// //                     />
// //                 </div>
// //                 <button type="submit" className="btn btn-success w-100 rounded-0">
// //                     Login
// //                 </button>
// //                 </form>
// //                 <p>Don't have an account?</p>
// //                 <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
// //                     Sign Up
// //                 </Link>
                
// //         </FormContainer>
            
// //         </div>
// //     </div>
// //   );
// // }

// // export default Login;