import React from 'react'

import './Pharmacy.css'
import Medicine from './Medicine'

function Pharmacy() {
  return (  <div className="head">
  <h1>The pharmacy<br></br>
that really delivers</h1>
<div className="search">
        <input className="searchInput" type="text" placeholder=" Search for medicines" />
</div>

<div className="medrow">
  <Medicine
  
  text="Napa -IV Infusion 100 ml"
  details="Beximco Pharmaceuticals Ltd."
  generc= "Generic:Paracetamol   "
  image="./images/napa.png"
  price= {140} 
  button={"add to cart"}/>
  <Medicine
  text="Fexo 120mg (50pcs)"
  details="Square Pharmaceuticals Ltd."
  generc= "Type:Tablet   "
  image="./images/fexo.png"
  price= {360}  />
  <Medicine
  text="Ace syrup 60ml"
  details="Square Pharmaceuticals Ltd."
  generc= "Generic:Paracetamol   "
  image="./images/ace.png"
  price= {40} />
  
 
   </div>

<div className="medrow">
   <Medicine
  
  text="Adovas syrup 100 ml"
  details="Square Pharmaceuticals Ltd."
  generc= "Type:Syrup   "
  image="./images/adovas.png"
  price= {64} />
  
  <Medicine
  text="ActiKid Multi-vitamin drops 25ml"
  details="Beximco Pharmaceuticals Ltd."
  generc= "Type:Liquid   "
  image="./images/vit.png"
  price= {1280} />
  <Medicine
  text="Maxpro Hp(4pcs)"
  details="Renata Ltd."
  generc= "Type:Capsule"   
  image="./images/maxpro.png"
  price= {50} />

</div>

   </div>
  )
}

export default Pharmacy
