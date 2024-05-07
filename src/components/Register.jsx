import React, { useEffect, useState } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests
import { useUserContext } from '../context/UserContext';
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import './Home.css'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setUserInfo } = useUserContext();
  // const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/Register', formData);
      setUserInfo(response.data);
      navigate("/login"); // Navigate to /login route upon successful registration
    } catch (error) {
      console.error('Error:', error);
    }
  // }
  //   useEffect(() => {
  //   if(token !== ""){
  //     toast.success("You already logged in");
  //     navigate("/dashboard");
  //   }
  // }, []);;

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Send registration data to backend API
    
//     axios.post('http://localhost:3000/Register', formData)
//       .then(response => {
//         setUserInfo(response.data)
//         navigate("/login") // Save user info to context
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//     //   const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     axios.post("http://localhost:3000/Register", formData)
//     //     .then(result => {console.log(result)
//     //     navigate("/login")
//     //     })
//     //     .catch(err => console.log(err))
//     // }
//   };
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
        <div className="register-container bg-white p-3 rounded w-25 ">
        <FormContainer className="d-flex justify-content-center ">
        <h2><center>Sign Up</center></h2>
       
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <label >
                    <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Name' 
                    autoComplete='off' 
                    name='username' 
                    className='form-control rounded-0'
                    value={formData.name} 
                    onChange={handleChange}
                  
                    />
                </div>
                <div className="mb-3">
                    <label >
                        <strong>Email</strong>
                    </label>
                    <br />
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    value={formData.email} 
                    onChange={handleChange}

                    />
                </div>
                <div className="mb-3 ">
                    <label >
                        <strong >Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    value={formData.password} 
                    onChange={handleChange}

                    />
                </div>
                <button    variant="outline-success" type="submit" className="btn button btn-success w-100 rounded-0">
                    Sign Up
                </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
                </FormContainer>
                </div>
                </div>
    
  );
};

export default Register;















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import FormContainer from "../components/FormContainer";
// import './Home.css'
// import { useNavigate } from "react-router-dom";


// function Register() {    

//     const [name, setName] = useState()
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//     // const [registeredUser, setRegisteredUser] = useState(null);
//     const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:3000/Register", { name, email, password })
    //     .then(result => {console.log(result)
    //     navigate("/login")
    //     })
    //     .catch(err => console.log(err))
    // }

   


//   return (
    // <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
    //     <div className="register-container bg-white p-3 rounded w-25 ">
    //     <FormContainer className="d-flex justify-content-center ">
    //     <h2><center>Sign Up</center></h2>
       
    //         <form onSubmit={handleSubmit}>
    //             <div className="mb-3 ">
    //                 <label htmlFor="email" >
    //                     <strong>Name</strong>
    //                 </label>
    //                 <input type="text" 
    //                 placeholder='Enter Name' 
    //                 autoComplete='off' 
    //                 name='email' 
    //                 className='form-control rounded-0'
    //                 onChange={(e) => setName(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="email">
    //                     <strong>Email</strong>
    //                 </label>
    //                 <br />
    //                 <input type="text" 
    //                 placeholder='Enter Email' 
    //                 autoComplete='off' 
    //                 name='email' 
    //                 className='form-control rounded-0' 
    //                 onChange={(e) => setEmail(e.target.value)}

    //                 />
    //             </div>
    //             <div className="mb-3 ">
    //                 <label htmlFor="email">
    //                     <strong >Password</strong>
    //                 </label>
    //                 <input type="password" 
    //                 placeholder='Enter Password' 
    //                 name='password' 
    //                 className='form-control rounded-0' 
    //                 onChange={(e) => setPassword(e.target.value)}

    //                 />
    //             </div>
    //             <button    variant="outline-success" type="submit" className="btn button btn-success
    //  w-100 rounded-0">
    //                 Sign Up
    //             </button>
    //             </form>
    //             <p>Already have an account?</p>
    //             <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
    //                 Login
    //             </Link>
           
//       </FormContainer>
//       {/* {registeredUser && <Meal userInfo={registeredUser} />} */}
//         </div>
//     </div>
//   );
// }
