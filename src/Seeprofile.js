import React, { useState, useEffect } from "react";
import "./Patientsprofile";
import {db} from "./firebase";
  import  "./Patientsprofile.css"
function Seeprofile() {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
  
    const [Medicine, setMedicine] = useState();
    const[Dosage, setDosage] =useState();
    const[Time, setTime] =useState();
    const [profile, setprofile] = useState([]);
    
  
  useEffect(() => {
   
        const fetchData = async () => {
            try {
              const collectionRef = db.collection('profile');
              const snapshot = await collectionRef.get();
              const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
              setprofile(fetchedData);
            } catch (error) {
              console.error('Error fetching data from Firestore: ', error);
            }
          };
      
          fetchData();
        }, []);
  
  
  
  return (
    <div>
      <h2>My profile</h2>
      <ul>
        {profile.map((item) => (
          <li key={item.id}>
           <h3>Name - {item.name} </h3>
           <h3>Age - {item.age} </h3>
           <h3>Medicine - {item.Medicine} </h3>
           <h3>Time - {item.Time} </h3> 

          </li>
        ))}
      </ul>
    </div>
  );
}
 
  
export default Seeprofile;