import React, { useState } from 'react';
import './login.css'; 
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

   
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

   
    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      navigate('/Home'); 
    } else {
      alert('Invalid email or password. Please try again.');
    }

    
    setEmail('');
    setPassword('');
  };

  const handlePasswordReset = () => {
    navigate('/Reset'); 
  };

  const goToSignup = () => {
    navigate('/Signup'); 
  };

  return (
    <div className="signup">
      <div>
        <span className="sck" onClick={goToSignup}>&lt;</span>
      </div>
      <h1 className="pk">Login</h1>
      <form onSubmit={handleLogin}>
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          placeholder="Enter the email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <div className="password">
          <input
            type="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon">&#128065;</span>
        </div>

        <p className="for" onClick={handlePasswordReset}>
          Forget password?
        </p>

        <button type="submit" className="signup-btn">
          Login
        </button>
      </form>

      <p className="login-text">
        Don't have an account? <a href="/Signup">Sign up</a>
      </p>

      <div className="social-signup">
        <p className="po">Sign up with</p>
        <div className="social">
          <button className="fb">
            <a href="https://www.facebook.com/login/">
              <FaFacebookF className="icon" /> Facebook
            </a>
          </button>
          <button className="gg">
            <a href="https://www.google.com/intl/en-GB/account/about/">
              <FaGoogle className="zsa" /> Google
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
