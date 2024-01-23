import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import '../styles/home.css';

const Home = () => {
  return (
    <>
    <div  className="container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            COIMBATORE <br/> TURF <br/> LEAGUE
          </h1>
          <p className="primary-text">
            The Best League in the Town! <br/> Let's Football Covai!
          </p>
        </div>
        <div className="home-image-section">
          {/* <img width={100000} height={100000} src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
   </>
    
  );
};

export default Home;