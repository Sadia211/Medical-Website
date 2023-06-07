import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './Stateprovider';
import { cartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
import {db} from './firebase';

function Subtotal() {
  const navigate=useNavigate();
  const[{cart},dispatch]=useStateValue();
  return (<div className='Subtotal' >
    <CurrencyFormat
    renderText={(value) =>(
        <>
       
        <p>
            Subtotal ({cart.length}  items): <strong>{value}</strong>
             </p>
          
            
            
            </>
    )}

decimalScale={2}
value={cartTotal(cart)}
displayType={"text"}
thousandSeparator={true}
prefix={"৳"}/>
 <button onClick={e=>navigate("/payment")}>Proceed to checkout</button>


    </div>
  )
      
    }


export default Subtotal
