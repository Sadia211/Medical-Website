import React from "react";
import "./Medicine.css";
import { useStateValue } from "./Stateprovider";
 
import { useNavigate } from 'react-router-dom';
function Docinfo({text,image,details}) {
  const navigate=useNavigate();
 const [{cart},dispatch]=useStateValue();
 console.log("this iscart",cart);
 const addToCart=()=>{
dispatch({
type:"addToCart",
item:{
text:text,
image:image,
details:details,
},



});
   
 };
  return (
    
    <div className='med'>
      <div className ="medInfo">
      <p>{text}</p>
      <p>{details}</p>
    
      
      </div>
      
      <div className='p'>
<img className='q'src={image} />
</div>
<div className ="medInfo">
  </div>

<button onClick={e=>navigate("/Appointment")}>Book Appointment</button></div>

    
   
  )
}

export default Docinfo
