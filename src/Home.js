import React from "react";
import "./Home.css";
import Product from './Homebar'
import "./Homebar.css";

import {Link} from "react-router-dom";
function Home() { 
        return (
          
          <div classname="first">
            
          <div className="home">
            <Link to="Patientlogin"> <span className="text1">Patient's profile</span></Link>
            
             <Link to ="/doctors">
             <span className="text1">Doctors</span></Link>
             <Link to="/pharmacy">
             <span className="text1">Pharmacy</span>
             </Link>
          <Link to="/medicalequipments">
            <span className="text1">Medical Equipments</span>
            </Link>
           
              <div className="appoint">
          
              
                     
          <span className="new">We provide the best doctors<br></br></span></div>
          <div className="book">
          <button>Book Appointment</button></div>
          
            
<div className="otherimg">
                 
              </div>

  <div className="homerow">
  <Product
  
  text1="At Medicare you will be treated by caring, qualified doctors.
  They take the time to listen to you and understand your healthcare needs."
  image1="./images/d.jpg"/>
  
  
  
  <Product text1="You can get the care you need 24/7 online. 
  You can also manage your own health profile."
  image1="./images/m.jpg"/>

  <Product text1="We provide home delivery for medicines and medical equipments too! ."
  image1="./images/f.jpg"/>
   </div>
</div>
    </div>
    );
};

export default Home;