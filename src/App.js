import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Pharmacy from './Pharmacy';
import Medicalequip from  './Medicalequip';
import Signin from './Signin';
import Doctors from './Doctors';
import Appointment from './Appointment';
import {BrowserRouter as Router,Routes,Route}
from "react-router-dom";
import Checkout from './Checkout';
import {auth} from './firebase';
import { useStateValue } from './Stateprovider';
import Payment from './Payment';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Patientlogin from './Patientlogin';
import Patientsprofile from './Patientsprofile';
import Seeprofile from './Seeprofile'
function App() {
const[{},dispatch]=useStateValue();

useEffect(()=>{
  auth.onAuthStateChanged(authUser =>{console.log("the user id",authUser);
  if(authUser){

dispatch({
type:'setuser',
user:authUser
})


  }
    else{

dispatch({
  type:'setuser',
user:null
})

    }
})


},[])


  return (
  <Router>
    <div className="App">
      <Routes>
      <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
      <Route path="/pharmacy" element={[<Header />, <Pharmacy/>]}/>
      <Route path="/medicalequipments" element={[<Header />, <Medicalequip/>]}/>
      <Route path="/Payment" element={[<Header />, <Payment/>]}/>
      <Route path="/Signin" element={[ <Signin/>]}/>
      <Route path="/doctors" element={[<Header />, <Doctors/>]}/>
      <Route path="/Appointment" element={[<Header />, <Appointment/>]}/>
      <Route path="/Patientlogin" element={[<Header />, <Patientlogin/>]}/>
      <Route path="/Patientsprofile" element={[<Header />, <Patientsprofile/>]}/>
      <Route path="/Seeprofile" element={[<Header />, <Seeprofile/>]}/>
      

<Route path="/" element={[<Header />, <Home />]}/>

      
      
    
      </Routes>
      
    </div>
  
{/* Same as */}
<ToastContainer />
    </Router>
    
  );
}

export default App;
