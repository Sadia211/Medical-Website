import React from "react";
import "./Medicine.css";
import { useStateValue } from "./Stateprovider";


function Medicine({text,image,details,generc,price}) {
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
price:price,},



});
   
 };
  return (
    
    <div className='med'>
      <div className ="medInfo">
      <p>{text}</p>
      <p>{details}</p>
      <p>{generc}</p>
      
      </div>
      
      <div className='p'>
<img className='q'src={image} />
</div>
<div className ="medInfo">
  <small>৳</small>
<strong>{price}</strong></div>
<button onClick={addToCart}>Add to basket</button></div>

    
   
  )
}

export default Medicine
