import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const handleReturnClick = () => navigate('/');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    navigate('/dashboard'); // Navigate to the Dashboard after sign-in
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-overlay">
        <div className="sign-in-image-container"></div>
        <div className="sign-in-form-container">
          <button className="sign-in-return-button" onClick={handleReturnClick}>
            &larr; Return
          </button>
          <h2>Inventory System</h2>
          <p>Sign in to Continue</p>
          <div className="sign-in-input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="sign-in-input-group">
            <label htmlFor="password">Password</label>
            <div className="sign-in-password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button className="sign-in-toggle-password" onClick={toggleShowPassword}>
                <i className={showPassword ? 'fas fa-eye-slash sign-in-eye-icon open' : 'fas fa-eye sign-in-eye-icon'}></i>
              </button>
            </div>
            <span className="sign-in-forgot-password">Forgot Password?</span>
          </div>
          <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
