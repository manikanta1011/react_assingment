import React from "react";
import "./fav.css";
import { useNavigate } from "react-router-dom";
 
const Fav = () => {
    const navigate=useNavigate();
    const arrow=()=>{
        navigate('/Orders')
      }
  return (
    <div className="favoritess-container">
     
      <header className="favoritess-header">
      <button className="rati" onClick={arrow}>&lt;</button>
        <h2 className="titlee">Favorites</h2>
        <div className="profilee-icon">
          <img src="/asset/Group (2).png" alt="Profile"  />
        </div>
      </header>
 
     
      <div className="tabb-section">
        <button className="tabb active">Food Items</button>
        <button className="tabb">Resturents</button>
      </div>
 
     
      <div className="foodd-items">
        <div className="foodd-item">
          <div className="imagee-container">
            <img
              src="/asset/ball (1).png"
              alt="Chicken Hawaiian"
              className="foodd-image"
            />
            <span className="pricee-tag">$12.20</span>
            <button className="favoritee-button">❤️</button>
          </div>
          <div className="foodd-details">
            <h2>Chicken Hawaiian</h2>
            <p>Chicken, Cheese and pineapple</p>
            <div className="ratingg">
              <span className="tyew">4.5 ★</span>
              <span className="tyew">(25+)</span>
            </div>
          </div>
        </div>
 
 
        <div className="foodd-items">
       
        <div className="foodd-item">
          <div className="imagee-container">
            <img
              src="/asset/ball (2).png"
              alt="Chicken Hawaiian"
              className="foodd-image"
            />
            <span className="pricee-tag">$12.20</span>
            <button className="favoritee-button">❤️</button>
          </div>
          <div className="foodd-details">
            <h2>Chicken Hawaiian</h2>
            <p>Chicken, Cheese and pineapple</p>
            <div className="ratingg">
              <span className="tyew">4.5 ★</span>
              <span className="tyew">(25+)</span>
            </div>
          </div>
        </div>

        <div className="foodd-items">
       
       <div className="foodd-item">
         <div className="imagee-container">
           <img
             src="/asset/ball (2).png"
             alt="Chicken Hawaiian"
             className="foodd-image"
           />
           <span className="pricee-tag">$12.20</span>
           <button className="favoritee-button">❤️</button>
         </div>
         <div className="foodd-details">
           <h2>Chicken Hawaiian</h2>
           <p>Chicken, Cheese and pineapple</p>
           <div className="ratingg">
             <span className="tyew">4.5 ★</span>
             <span className="tyew">(25+)</span>
           </div>
         </div>
       </div>
       </div>
 
       
        
     
    </div>
    </div>
    </div>
  );
};
 
export default Fav;