import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";
 import Home from "./components/Home"
 import NutritionChecker from "./components/NutritionCheck";
 import Bmr from "./components/Bmr";
 import Diet from "./components/Diet";
 import Books from "./components/Books";
import RunningTimer from "./components/RunningTimer";
import Mealbase from "./components/Mealbase";
import MealPart2 from "./components/MealPart2";

import ExerciseDB from "./components/ExerciseDB";
function App() {
  
  return (
    
    <Router>
        <Navbar></Navbar>
      <AuthProvider>
        <Routes>
        
        <Route path="/" element={<Home />} />
       
         <Route path="/home" element={<Home />} />
         <Route path="/NutritionCheck" element={<NutritionChecker />} />
         <Route path="/Health" element={<Bmr />} />
         <Route path="/register" element={<Registration />} />{" "}
         <Route path="/logout" element={<Logout />} />
         <Route path="/login" element={<Login />} />
         {/* <Route path="/exercise" element={<ExerciseDB />} /> */}

          <Route path="/Mealbase" element={<Mealbase />} />
          <Route path="/RunningTimer" element={<RunningTimer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Mealpart" element={<MealPart2 />} />
          <Route path="/Diet" element={<Diet />} />
          <Route path="/exercise" element={<Books />} />
        
          
          {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
// import React, {useState} from "react";
// import { BrowserRouter, Route, Routes, } from "react-router-dom";
// import data from './data'
// // import Tours from "./components/Tours";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home"
// import NutritionChecker from "./components/NutritionCheck";
// import Bmr from "./components/Bmr";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { UserContextProvider } from './context/UserContext';
// import Dashboard from "./loggedin/Dashboard";
// // import PrivateRoute from "./Routes/PrivateRoute";



// const App = () => {

//   const [tours, setTours] = useState(data);

//   function removeTour(id) {
//     const newTours = tours.filter(tour => tour.id !== id);
//     setTours(newTours);
//   }

//   if(tours.length === 0) {
//     return (
//         <div className="refresh">
//           <h2>No Tours Left</h2>
//           <button className="btn-white" onClick={() => setTours(data)}>
//             Refresh
//           </button>
//         </div>
//     );
//   }

//   return (
//     <div className="App">
//       <Navbar></Navbar><br></br>
//       <BrowserRouter>
//       <UserContextProvider> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/NutritionCheck" element={<NutritionChecker />} />
//         <Route path="/Health" element={<Bmr />} />
//         <Route path="/Register" element={<Register />} /> 
//         <Route path="/Login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
    
     
//       </Routes>
//       </UserContextProvider> 
//       </BrowserRouter>
//       {/* <Home /> */}
//       {/* <Tours tours={tours} removeTour={removeTour}></Tours> */}
//     </div>
//   )
// };

// export default App;