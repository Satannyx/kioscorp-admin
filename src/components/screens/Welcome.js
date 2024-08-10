import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/sign-in');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-overlay">
        <div className="welcome-content">
          <h1>Welcome</h1>
          <p>Universal Auto Supply and Bolt Center</p>
          <button className="welcome-sign-in-button" onClick={handleSignInClick}>
            Click to Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
