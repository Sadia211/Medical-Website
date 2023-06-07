import React from 'react'
import './Medicalequip.css'
import Equips from './Equips'

function Medicalequip() {
  return (
    <div>
      <div className="head1">
  <h1>Get your equipments today</h1><br></br>
<h2>Wheel chairs, crutches and more.</h2>
<div className="search">
        <input className="searchInput" type="text" placeholder=" Search for equipments" />
</div>

<div className="equiprow">
  <Equips
  
  text="Folding transport wheelchair with full arms."
  details="Drive medical."
  generc= "Color:Black  "
  image="./images/wc1.png"
  price= {5000} 
  button={"add to cart"}/>
  <Equips
  text="Light Weight dual axle wheel chair"
  details="Drive cruiser."
  generc= "Color:Black  "
  image="./images/wc2.png"
  price= {6000}  />
  <Equips
  text="Sll light weight wheel chair"
  details="Invacare corporation."
  generc= "Color:Brown   "
  image="./images/wc3.png"
  price= {4000} />
  
 
   </div>

<div className="equiprow">
   <Equips
  
  text="Round Glasses"
  details="Size:medium"
  generc= "Color: Black  "
  image="./images/egg1.png"
  price= {1100} />
  
  <Equips
   text="Square Glasses"
   details="Size:medium"
   generc= "Color: Brown  "
  image="./images/egg2.png"
  price= {1280} />
  

</div>

   

   <div className="equiprow">
   <Equips
  
  text="Blood glucose monitor kit"
  details="Metene Td 4116."
  generc= "100 glucometer strips and 100 lancets   "
  image="./images/bg1.png"
  price= {2000} />
  
  <Equips
  text="Bluetooth Blood glucose monitor kit"
  details="Caresense N plus."
  generc= "100 glucometer strips and 100 lancets   "
  image="./images/bg2.png"
  price= {5000} />
  

</div>

   </div>
   </div>
    
  )
}

export default Medicalequip
