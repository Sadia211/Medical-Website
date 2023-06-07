import React , {useState} from 'react'
import { useStateValue } from './Stateprovider'

import {db} from './firebase'

import './Appointment.css'

import 'react-calendar/dist/Calendar.css';

import 'react-toastify/dist/ReactToastify.css';

function Payment() {

    
    const [Name, setName] = useState("");
  const [Age, setAge] = useState("");

  const [Date, setDate] = useState();
  const[Doctor, setDoctors] =useState();
 
  const submit = (e) => {

  
    db.collection("appointment").add({
      name: Name,
      age: Age,
      appointmentdate:Date,
      doctor:Doctor
    });
  
    setName("");
    setAge("");
    setDoctors(" ");
    
  };
  
  return (
    <div className="Buy">
      <div className="form">
        <input
          type="text"
          placeholder="Please enter your name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Please enter your age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
 
       
        
       <input
  
          type="date"
        
         
          onChange={(e) => setDate(e.target.value)}
          
        />
       <select value={Doctor} onChange={(e) => setDoctors(e.target.value)} >
  <option value="Dr Nafia Sat-Thu(5:00-9:00pm) ">Dr Nafia Sat-Thu 5:00-9:00pm </option>
  <option value="Dr Halima">Dr Halima</option>
  <option value="Dr Reza">Dr Reza</option>
</select>
   
        
<button onClick={submit} >Book  now</button>

 </div>
    

</div>)}
  

    
 

export default Payment
