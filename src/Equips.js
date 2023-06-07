import React from "react";
import "./Equips.css";
import { useStateValue } from "./Stateprovider";

function Equips({text,image,details,generc,price}) {
 
 

  const [{cart},dispatch]=useStateValue();
  console.log("this iscart",cart);
  const addToCart=()=>{
 dispatch({
 type:"addToCart",
 item:{
 text:text,
 image:image,
 details:details,
 generc:generc,
 price:price,},});};
  return (
    
    <div className='eq'>
      <div className ="eqInfo">
      <p>{text}</p>
      <p>{details}</p>
      <p>{generc}</p>
      
      </div>
      
      <div className='p'>
<img className='q'src={image} />
</div>
<div className ="eqInfo">
  <small>৳</small>
<strong>{price}</strong></div>
<button onClick={addToCart}>Add to basket</button></div>

    
   
  )
}

export default Equips

