import React,{useState,useEffect} from 'react'
import {db} from './firebase'
import './Patientsprofile.css'
import {Link,useNavigate} from "react-router-dom";
import './Patientlogin'
import {auth} from './firebase'

function Patientsprofile() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");

  const [Medicine, setMedicine] = useState();
  const[Dosage, setDosage] =useState();
  const[Time, setTime] =useState();
  const [profile, setprofile] = useState([]);
  const [patient, setPatient] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((patient) => setPatient(patient));
  }, []);

  const submit = (e) => {

  
    db.collection("profile").add({
      name: Name,
      age: Age,
      Medicine:Medicine,
      Dosage:Dosage,
      Time:Time,
      patientEmail: auth.currentUser.email
    });
  
    setName("");
    setAge("");
    setMedicine(" ")
    setDosage(" ");
    setTime("");
    
  };
  
  useEffect(() => {
    const userRef = db.collection('profile').doc(profile.uid);
    userRef.get().then((doc) => {
      if (doc.exists) {
        setName(doc.data().name);
      } else {
        console.log('No such document!');
      }
    });
  }, [patient]);
  
  
  return (
    <div className="profile">
      <div className="container">
        <h1>Your profile</h1>
        <input
          type="text"
          placeholder="Please enter your name"
          value={Name}
          onChange={(e) => setName(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Please enter your age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
 
       
 <div className="secondcontainer">
 <input
          type="text"
          placeholder="Medicine name"
          value={Medicine}
          onChange={(e) => setMedicine(e.target.value)}
          
                
        /> 
        <input
        type="text"
        placeholder="Dosage"
        value={Dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
    <input
        type="text"
        placeholder="Timing"
        value={Time}
        onChange={(e) => setTime(e.target.value)}
      /></div>
        
<button onClick={submit} >Save</button>
{profile?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
</div>
<Link to="/Seeprofile">
            <span className="sp">View profile</span>
            </Link>
 </div>)}
 
  

    
 

export default Patientsprofile
