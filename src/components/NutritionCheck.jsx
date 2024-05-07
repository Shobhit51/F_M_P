import React from "react";
// import { Box } from "@mui/material";
import './Home.css'
import NutritionCheckerForm from "../components/NutritionCheckerForm";
// import Footer from "../components/Footer";

const NutritionChecker = () => {
  return (
    <>
      <div class="nut">
        <NutritionCheckerForm />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default NutritionChecker;