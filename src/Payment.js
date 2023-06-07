import React , {useState} from 'react'
import { useStateValue } from './Stateprovider'
import "./Payment.css"
import CurrencyFormat from 'react-currency-format';
import { cartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
import {db} from './firebase'
import Subtotal from './Subtotal'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Payment() {
    const[{cart},dispatch]=useStateValue();
    const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  
  const submit = (e) => {

    toast.success(<h2>Thank you! Your order is confirmed.</h2>, {
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message'
  });
    db.collection("users").add({
      name: Name,
      phone: Phone,
      address:Address,
    });
  
    setName("");
    setPhone("");
    setAddress("");
    
  };
  
  return (
    <div className="Buy">
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        
        
  
  
        
    <CurrencyFormat
    renderText={(value) =>(
        <>
       
        <h2>
            Cash on delivery: <strong>{value}</strong>
             </h2>
          
            
            
            </>
    )}
    decimalScale={2}
value={cartTotal(cart)}
displayType={"text"}
thousandSeparator={true}
prefix={"৳"}/>
<button onClick={submit} >Buy now</button>

 </div>
    

</div>)}
  

    
 

export default Payment
