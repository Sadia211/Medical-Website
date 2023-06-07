import React ,{useState} from 'react';
import './Cp.css'
import { useStateValue } from "./Stateprovider";

import {db} from './firebase'

function Cp({text,image,details,generc,price  }) {
    const [{ cart },dispatch] = useStateValue();
    
const removefromcart = () =>{
    dispatch({
        type: 'removefromcart',
        text: text,
    })
   
 
}
    return (
        <div className='main'>
        <div className='cp1'>
            <img className='image' src={image} />

            <div className='info'>
               <p className='text'>{text}</p>
                <p className='details'>{details}</p>
                <p className='generc'>{generc}</p>
                <p className="price">
                    <small>৳</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removefromcart}>Remove from cart</button></div></div>


         
                
               </div>
                            
        
    )
}

export default Cp