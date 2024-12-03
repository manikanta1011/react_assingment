// import React from 'react';
// import { FaFacebookF, FaGoogle } from 'react-icons/fa'; 
// import './welcome.css';
// import { useNavigate } from 'react-router-dom';

// const Welcome = () => {
//     const navigate=useNavigate();
//     const handle=()=>{
//         navigate('/Login') 
//     }
//     const handleSi=()=>{
//       navigate('/Signup') 
//   }
//   return (
//     <div>
        
//       <div className='wel'>
//       <h5>skip</h5>
//         <div className='left'>
//           <h1>Welcome to</h1>
//           <p className='fod'>Food Hub</p>
//           <p className='para'>Your favourite foods delivered<br></br>fast at your door.</p>
//         </div>

        
//         <div className='sign'>
//           <p className='as'>------   Sign-in with   ------</p>
//           <button > 
//           <a href='https://www.facebook.com/login/'>
//             <FaFacebookF className='icon' /> Facebook </a> </button>
//           <button><a href='https://accounts.google.com/'><FaGoogle className='icons' /> Google </a> </button>
//         </div>

       
//         <div className='star'>
//           <button className='st' onClick={handleSi}>Start with email or phone</button>
//           <p className='al'>Already have an account? 
         
//            <a className='ref' href='' onClick={handle}> Sign-in</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React from 'react'
import "./welcome.css"
import {FaGoogle, FaFacebookF} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
 
 
 const Welcome = () => {
    const NAv=useNavigate()
   
    const handleanch=()=>{
           NAv("/Login")
    }
 
    const handleswe =()=>{
      NAv("/SignUp")
    }

    const hand=()=>{
      NAv("/SignUp")
    }
    return (
       
     
            <div className="app">
      <div className="contai">
        <div className="skip-butt" onClick={hand}>Skip</div>
        <div className='sendle'><h1 className="welcome-text">Welcome to</h1>
        <h1 className="brame">FoodHub</h1>
        <p className="subti">Your favourite foods delivered <br /> fast at your door.</p></div>
        <div className="social-sig">
          <p className='SIGN'>--------- Sign in with --------</p>
          <div className="button-conta">
            <button className="facebook-button"> <a href="https://www.facebook.com/login/" className='change'><FaFacebookF size={13} color='blue'/> Facebook</a></button>
            <button className="google-button"> <a href="https://www.google.com/intl/en-GB/account/about/" className='change'> <FaGoogle size={13} color='red'/>   Google </a></button>
          </div>
        </div>
        <button className="email-signin" onClick={handleswe}>Start with email or phone</button>
        <p className="signin-tex">
          Already have an account? <a href='#'  onClick={handleanch }>Sign In</a>
        </p>
      </div>
    </div>
       
    )
}
export default Welcome

