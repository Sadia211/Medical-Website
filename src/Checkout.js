import React,{useState} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './Stateprovider';
import Cp from './Cp';
import {db} from './firebase'
function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  const[text]=useState("");
  const submit = (e) => {
    e.preventDefault();
    db.collection("users").add({
      text: text,
      
    });
  
    text("");
    
  };
  return (
    <div className="checkout">
      <h1>Shopping Cart</h1>
      {cart.map(item => (
            <Cp
             image={item.image}
              text={item.text}
              details={item.details}
              generc={item.generc}
              price={item.price}
       
              
            />
          ))}
          
         
      <div className="subtotal">

      <Subtotal/>
      
        
      </div>
      
    </div>
    
     
   
  )
}

export default Checkout;
