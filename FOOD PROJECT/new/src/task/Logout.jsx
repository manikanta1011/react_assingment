import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have logged out.");
    navigate("/Welcome");
  };

  return (
    <div className="home-container">
      {/* Content of the home page */}
      <div className="content">
        <h4>What Would You Like</h4>
        {/* Other content */}
      </div>

      {/* Logout button at the bottom */}
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout} >
       
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
