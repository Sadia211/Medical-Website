import React from "react";
import "./Header.css";


import {Link} from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import {auth} from "./firebase";





function Header() {  
  const[{cart,user},dispatch]=useStateValue();

const handleAuthentication =() =>{
if  (user)
{
  auth.signOut();
}
}


  return (
    <div className="header">
      
        <img
          className="logo"
         src="./images/Medicare.png"
        />  
   

      <div className="header__nav">
        <Link to={!user && '/Signin'}>
          <div onClick={handleAuthentication}className="header__option">
          <span className="Line">Hello   {!user? ' Guest ':user.email}</span>
   <span className="Line">{user? 'Sign Out ':'Sign In'}</span>
          
          </div>
          </Link>
          <div className="header__option">
            
            <span className="Line">Contact us :012345566</span>
          </div>
          <div className="header__option">
          <Link to ="/checkout">
          <span className="Line">Cart</span>
          </Link>
        </div>
        <Link to='/checkout'>
        <div className="header__optionBasket">
            
            <span className="Cart">
              {cart.length}
            </span></div>
  
           
        
         </Link>
            </div>
            </div>);}

 


export default Header;