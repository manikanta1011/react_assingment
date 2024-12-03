import React from "react";
import "./orders.css";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigated=  useNavigate();
    const arrow=()=>{
      navigated('/Cart')
    }
  return (
    <div className="my-orders">
        <div className="dfc">
        <button className="wase" onClick={arrow}>&lt;</button>
        <p className=''>MY ORDERS</p>
        <img src="./asset/Group (2).png" alt="pi" className='kh'/> 
        </div>
      <header className="header">
        <button className="nav-button">Upcoming</button>
        <button className="nav-button inactive">History</button>
        
      </header>

      <div className="order-section">
        <div className="current-order">
          <div className="order-header">
            <img
              src="/asset/vf (3).png"
              alt="Starbucks"
              className="order-logo"
            />
            <span className="order-name">Starbuck</span>
            <span className="order-number">#264100</span>
          </div>
          <div className="order-info">
            <div className="arrival-time">
              <span className="time">25min</span>
              
            </div>
            <span className="status">Food on the way</span>
          </div>
          <div className="order-actions">
            <button className="cancel-button">Cancel</button>
            <button className="track-button">Track Order</button>
          </div>
        </div>
      </div>

      <div className="past-orders">
        <h2 className="section-title">Lasted Orders</h2>
        <div className="past-order">
          <div className="order-header">
            <img
              src="/asset/vf (1).png"
              alt="Jimmy John's"
              className="order-logo"
            />
            <span className="order-name">Jimmy John's</span>
            <span className="order-time">20 Jun, 10:30</span>
            <span className="order-price">$17.10</span>
          </div>
          <button className="reorder-button">Re-Order</button>
        </div>

        <div className="past-order">
          <div className="order-header">
            <img
              src="/asset/vf (2).png"
              alt="Subway"
              className="order-logo"
            />
            <span className="order-name">Subway</span>
            <span className="order-time">19 Jun, 11:50</span>
            <span className="order-price">$20.50</span>
          </div>
          <button className="reorder-button">Re-Order</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;



