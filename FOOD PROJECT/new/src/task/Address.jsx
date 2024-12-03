import React, { useState } from 'react';
import './address.css';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
    const navt=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    state: '',
    city: '',
    street: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const hjk =()=>{
    navt("/Rating")
  }
 
    const arrow=()=>{
      navt('/Profile')
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: '', phoneNumber: '', state: '', city: '', street: '' });
  };

  return (
    <div className="form-container">
      <button className="rati" onClick={arrow}>&lt;</button>
      <h2 className="form-title">Address Details</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter your street address"
            value={formData.street}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="subm" onClick={hjk}>Save</button>
      </form>
      {submitted && <p className="success-message">Form save successfully!</p>}
    </div>
  );
};

export default AddressForm;
