import React,{useState} from 'react'
import './Signin.css'
import {Link,useNavigate} from "react-router-dom";
import {auth} from "./firebase";
function Signin() {
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const signin = e=>{e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate("/")
    })
  
  
  .catch(error =>alert(error.message))
  
  
  }
  const register= e=>{e.preventDefault()
  auth.createUserWithEmailAndPassword(email,password)
.then((auth)=>{
  if (auth) {
navigate("/")
  }
  
  
  console.log(auth);}
)
.catch(error=>alert(error.message))


}
  return (
    <div className='signin'>
      <div className='container'>
        <h1>SignIn</h1>
        <form>
            <h3>E-mail</h3>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
            <h3>Password</h3>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' onClick={signin} className='signinbutton'>SignIn</button>
<p>Don't have an account?</p>
<button type='submit' onClick={register}  className='registerbutton'>Create your account</button>
        </form>

      </div>
    </div>
  )
}

export default Signin
