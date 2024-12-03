import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navi=useNavigate();

 
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedName) setFullName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName) {
      alert('Please enter your name');
      return;
    }

    alert(
      `Successfully submitted:\nFull Name: ${fullName}\nEmail: ${email}\nPassword: ${password}`
    );

    
    localStorage.setItem('name', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

  
    setFullName('');
    setEmail('');
    setPassword('');
  };

  const handle=()=>{
    navi("/Login")
  }

  return (
    <div className="signup">
      <h5 className="mn">Sign up</h5>
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

        <label>Password</label>
        <div className="password">
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon">&#128065;</span>
        </div>

        <button type="submit" className="signup-btn" onClick={handle}>
          Sign Up
        </button>
      </form>

      <p className="login-text">
        Already have an account? <a href="/login">Login</a>
      </p>

      <div className="social-signup">
        <p className="qw">Sign up with</p>
        <div className="social">
          <button className="fb">
            <a href="https://www.facebook.com/login/">
              <FaFacebookF className="icon" /> Facebook
            </a>
          </button>
          <button className="gg">
            <a href="https://www.google.com/intl/en-GB/account/about/">
              <FaGoogle className="icd" /> Google
            </a>
          </button> 
         </div> 
       </div>
    </div>
  );
};

export default SignUp;
