import React from 'react';
import "../styles/contact.css"
import Navbar from "./Navbar" 
import Footer from './Footer';
// import Footer from "./Footer"
// Import your CSS file

const Contact = () => {
  return (

    <div className="contact-section">
    <Navbar />

      <h2>Contact Us</h2>
      <p>For any inquiries or assistance, please feel free to reach out to us:</p>
      
      <div>
        <h3>Email</h3>
        <p>Email: udhayapriyan550@gmail.com</p>
      </div>

      <div>
        <h3>Phone</h3>
        <p>Phone: 9870604390</p>
      </div>

      <div>
        <h3>Turf Address</h3>
        <p>134,U77 turf,Mallumichampati</p>
        <p>Coimbatore</p>
      </div>

      <div>
        <h3>Social Media</h3>
        <p>Connect with us on:</p>
        <ul>
         <li>Facebook:@U77 turf</li>
          <li>Instagram: @U77_turf</li>
        </ul>
      </div>
      <Footer/>
    </div>

  );
};

export default Contact;

