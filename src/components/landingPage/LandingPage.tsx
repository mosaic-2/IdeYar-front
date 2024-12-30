import React, { useEffect } from "react";
import Categories from "../categories/Categories";
import HomePage from "../homePage/HomePage";
import IntroductionSection from "../homePage/Introduction";
import { getLandingPostsApi } from "../../apis/landingPostsApi";
import axios from "axios";

const LandingPage = () => {
  useEffect(() => {
    getLandingPostsApi()
      .then((res) => {
        console.log("getAccountApi response:", res);
      })
      .catch((err) => {
        console.log("getAccountApi error: ", err);
        if (axios.isAxiosError(err)) {
        }
      });
  }, []);
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
