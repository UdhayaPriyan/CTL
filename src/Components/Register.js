import { Container } from "@mui/material";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import image from '../Assets/chettri.jpg'
import "../styles/Register.css"
import Navbar from "./Navbar";


export default function Register() {
    return (
        <div className="chettri" >
         <Navbar/>
        <Container >
           <div>
            <Row>
            <div className="register">
                <form className="" >                
                <h2>Register</h2>
                    <div >
                        <input type="text"
                            id="name"
                            placeholder="Team Name"
                        />
                    </div>    
                   
                    <div >
                        <input type="text"
                            id="name"
                            placeholder="Coach Name"
                        />

                    </div>
                    
                    <div >
                        <input type="number"
                            id="cnumber"
                            placeholder="Coach Phone no:-"
                        />

                    </div>


                    <div className="age" >
                    <span>Age Category</span>
                    <select className="age">
                        <option>under 9</option>
                        <option>under 14</option>
                        <option>under 18</option>
                    </select>
              

              
                </div>

                    <div className="tm">
                       <textarea placeholder="Team member's name" >
                    
                       </textarea>

                    </div>

                    <div >
                        <input type="password"
                            id="password2"
                            placeholder="ENTER any Password"
                            />
                    </div>

                

                    
                    <div >
                        <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
                    </div>
                    <div className="account">Already have an account? <Link to="/login">Login here</Link></div>
                    

                </form>
            </div>
            </Row>
            </div>
        </Container>
        
        </div>
       
    )
}


