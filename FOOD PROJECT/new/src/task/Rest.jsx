import React from 'react';
import './rest.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 
function Rest() {
    const navigate=useNavigate();
    const handleFoodHub=()=>{
        navigate('/Home');
    }
  return (
    <div className="containerrrrr">
      <img
        src="/asset/hut.png"
        alt="Pizza Hut Logo"
        className="logooooo"
       
      />
      <h1>How was your last order from Pizza Hut?</h1>
      <div className="feedbackkkkk">Good</div>
      <div className="ss">
            <FaStar color="yellow" size={24}/><FaStar color="yellow" size={24}/><FaStar color="yellow" size={24}/><FaStar size={24}/>
        </div>
      <button className="submittttt-btn" onClick={handleFoodHub}>Submit</button>
    </div>
  );
}
 
export default Rest;