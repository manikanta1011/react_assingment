import React, { useState } from "react";

 import './reset.css'
import { useNavigate } from "react-router-dom";


const Reset= () => {
  const [dat,setDat]=useState("")
   const navid= useNavigate();

  const handler=(e)=>{
    setDat(e.target.value)
  }
 const handlet=()=>{
     navid('/Verify')
 }
  return (
    <div className="simple-verification-container">
      
      <h1>Reset Password</h1>
      <p className="er">Please type the verification code sent to your email@example.com</p>
    <input type="texted"  value={dat} onChange={handler} /><br></br><br></br>
     <button className="pl" onClick={handlet}>SEND NEW PASSWORD</button>
    </div>
  );
};
 
export default Reset;
