// import React from "react";
// import AboutBackground from "../Assets/goat.jpg";
// import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import '../styles/about.css'
// const About = () => {
//   return (
//     <>
//       <div className="container">
//         <Navbar/>
//       <div className="about-section-container">
//   <div className="about-section-text-container">
//     <p className="primary-subheading">About</p>
//     <h1 className="primary-heading">
//       Food Is An Important Part Of A Balanced Diet
//     </h1>
//     <p className="primary-text">
//       Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
//       elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
//     </p>
//     <p className="primary-text">
//       Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
//       facilisis at fringilla quam.
//     </p>
//     <div className="about-buttons-container">
//       <button className="secondary-button">Learn More</button>
//       <button className="watch-video-button">
//         <BsFillPlayCircleFill /> Watch Video
//       </button>
//     </div>
//   </div>

// </div>
//       </div>
//     </>
   
//   );
// };

// export default About;


import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import '../styles/about.css';
import { colors } from "@mui/material";

const About = () => {
  return (
    <div  className="About-container">
      <Navbar/>
      <div className="about-section-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
        <h1>WINNERS RECEIVE Rs:5000(per team)</h1>
        <h1>AND A WINNER SHIELD</h1>
        <h2>RUNNERS RECEIVE RS:3000(per team)</h2>
        <h1 style={{color:"yellow"}}>ABOUT</h1>
          <p className="primary-text">
            This encourages the importance and developement of 
            sports in between children and youth. The game football
            in rural areas can reach a height ,which can grab oppurtunities 
            to children who choose football as their  career. Finally,this also
            shows an option of taking turf bussiness amoung  the  society.
            The Coimbatore Turf League (CTL) heralds a new era for football in the region,
             emphasizing the development of the sport at the grassroots level. 
            CTL's mission is to cultivate a thriving football community in Coimbatore by
            fostering a structured league format that encourages local talent and passion
            for the game. This league serves as a platform for players and teams to showcase
            their skills, promoting healthy competition and camaraderie among participants.
            By investing in player development programs and enhancing the quality of turf
            facilities, CTL not only advances the sport but also contributes to the overall
            sporting culture and pride of Coimbatore.








          </p>
        </div>
        <div className="home-image-section">
          {/* <img width={100000} height={100000} src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
   
    
  );
};

export default About;