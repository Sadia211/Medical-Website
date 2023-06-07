import React from 'react'
import './Doctors.css'
import Docinfo from './Docinfo'
import  Appointment from './Appointment'

function Doctors() {
  return (
    
        <div className="heading">
 <h3>  Psychiatrist Counselor | Dermatologist | Developmental Therapist | ENT 
| Nutritionist | Paediatrics | Psychiatrist </h3>


<div className="docrow">
  <Docinfo
  
  text="Dr.Nafia"
  details="PSYCHIATRIST
  MBBS, MD
  Consultant Psychiatrist
  Bangabandhu Sheikh Mujib
  Medical University (BSMMU)."
  image="./images/face.png"
 button={"add to cart"}/>
  

  <Docinfo
  text="Dr. Halima"
  details="DERMATOLOGIST
  MBBS, MD (BSMMU)
  Lead Dermatologist"
  image="./images/face.png"
  />
   <Docinfo
  text="Dr. Reza"
  details="ENT
  MBBS (Dhaka Medical College ),
  FCPS (ENT Specialist)"
  image="./images/face.png"
  />
  
  
 
   </div>



   </div>
  )
}




export default Doctors

