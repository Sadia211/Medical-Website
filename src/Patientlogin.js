
import React,{useState} from 'react'
import './Patientlogin.css'
import {Link,useNavigate} from "react-router-dom";
import {auth} from "./firebase";
import {db} from "./firebase"
function Patientlogin() {
   
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const [patient, setPatient] = useState(null);
    const plogin = e=>{e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then((userCredential) => setPatient(userCredential.patient))
      .then(auth=>{
        navigate("/Patientsprofile")
      })
    
    
    .catch(error =>alert(error.message))
    
    
    
  
  
}
    
    return (
      <div className='Login'>
        <div className='container'>
          <h1>LogIn</h1>
          <form>
              <h3>E-mail</h3>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)}/> 
              <h3>Password</h3>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/> 
              <button type='submit' onClick={plogin} className='signinbutton'>LogIn</button><br></br>
              <Link to="/Seeprofile"> See profile</Link>
          </form>
  
        </div>
      </div>
    )
  }
  


export default Patientlogin
