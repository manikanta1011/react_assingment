import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state?.cart || []); 

  
  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart); 
  };

  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      {cartItems.length > 0 ? (
        <div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} width="70px" height="95px" />
                <div className="cart-details">
                  <h5>{item.name}</h5>
                  <p>Rating: {item.rating} ⭐</p>
                  <p>Price: ₹{item.price}</p>
                  <p>year: {item.year}</p>
                  <p>actor: {item.actor}</p>
                  <p>director: {item.director}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveItem(index)} 
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
         
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
