import React from "react";
import Categories from "../categories/Categories";
import HomePage from "../homePage/HomePage";
import IntroductionSection from "../homePage/Introduction";

const LandingPage = () => {
  return (
    <>
      {/* Render the Categories */}
      <Categories />

      {/* Render the Home Page */}
      <HomePage />

      {/* Render the Introduction Section */}
      <IntroductionSection />
    </>
  );
};

export default LandingPage;
