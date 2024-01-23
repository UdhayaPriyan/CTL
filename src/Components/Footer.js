import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaFontAwesome, FaInstagram, FaWhatsapp } from "react-icons/fa";

import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-icons">
          <FaFacebookF style={{color:"white"}}/>
          <FaInstagram style={{color:"white"}}/>
          <FaWhatsapp style={{color:"white"}}/>
        </div>
      </div>
      </div>

  );
};

export default Footer;
