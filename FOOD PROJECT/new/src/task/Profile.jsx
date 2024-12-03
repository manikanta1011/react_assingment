import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css'

const Profile = () => {
  const [fullName, setFullName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 



  const navigated=  useNavigate();
    const arrow=()=>{
      navigated('/Home')
    }
    const but=()=>{
        navigated('/Address')
      }

    

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if(!fullName){
      alert("enter the name")
      return
    }
    alert(
      `Successfully submitted:\nFull Name: ${fullName}\nEmail: ${email}\nPassword: ${password}`
    ); 
    setFullName("")
    setEmail("")
    setPassword("")
  };

  return (
    <div className="si">
      <div>
      <button className="rati" onClick={arrow}>&lt;</button>
      </div>
      <div className='rti'>
      <img src="./asset/teel.png" alt="pi" className='isd' width={"60px"}  /> 
      <p className='paki'><strong>Eljad Eendaz</strong><br></br></p>
      <p className='cri'>Edit profile</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input
          type="text"
          placeholder="Please enter your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} 
        />

        <label>E-mail</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Phone Number</label>
        <div className="pas">
          <input
            type="number"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
         
        </div>


     
      </form>
    <div  className='dred'>
        <button className='dresd' onClick={but}>Next</button>
    </div>

     
     
 
    </div>
  );
};

export default Profile;
