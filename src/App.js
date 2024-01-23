import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Route,Routes } from "react-router-dom";
import Register from "./Components/Register";
function App() {
  return (
    <div className="App">
      <Routes>     
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/testimoial" element={<Testimonial />}/>
      
      <Route path="/contact" element={<Contact />}/>
      </Routes>
 
    </div>
  );
} 

export default App; 
                