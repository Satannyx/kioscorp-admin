import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import logo from '../img/Logo/kioscorp.png';  // Import the logo
import anotherlogo from '../img/Logo/anotherlogo.png';  // Import the logo

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/sign-in');
  };

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div>
          <div className="dashboard-logo">
            <img src={logo} alt="KiosCorp Logo" />
          </div>
          <div className="dashboard-menu">
            <a href="#" className="dashboard-menu-item">
              <i className="fas fa-bars"></i>
              Menu
            </a>
            <a href="#" className="dashboard-menu-item active">
              <i className="fas fa-home"></i>
              Home
            </a>
            <a href="#" className="dashboard-menu-item">
              <i className="fas fa-box"></i>
              Inventory
            </a>
            <a href="#" className="dashboard-menu-item">
              <i className="fas fa-chart-line"></i>
              Sales
            </a>
            <a href="#" className="dashboard-menu-item">
              <i className="fas fa-history"></i>
              History
            </a>
            <a href="#" className="dashboard-menu-item">
              <i className="fas fa-plus"></i>
              Add Stock
            </a>
          </div>
        </div>
        <div className="dashboard-logout">
          <a href="#" className="dashboard-menu-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </a>
        </div>
      </div>
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-header-content">
            <img src={anotherlogo} alt="Another Logo" className="dashboard-header-logo" />
            <div className="dashboard-header-text">
              <h1>Welcome to</h1>
              <h2>Inventory Management System</h2>
            </div>
          </div>
          <div className="dashboard-header-info">
            <span>
              <strong>Universal Auto Supply <strong className="highlight">and</strong> Bolt Center</strong>
            </span>
            <div className="dashboard-date-time">
              <span1>{formattedDate} | {formattedTime}</span1>
            </div>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="dashboard-summary">
            <div className="dashboard-summary-card">
              <h3>Hi Albert,</h3>
            </div>
            <div className="dashboard-summary-card">
              <h3>Monthly Sales</h3>
              <p>₱ 15,000</p>
              <p>Increase 10%</p>
            </div>
            <div className="dashboard-summary-card">
              <h3>Recent Orders</h3>
              <ul>
                <li>#00001 - ₱15,000</li>
                <li>#00002 - ₱500</li>
                <li>#00003 - ₱200</li>
                <li>#00004 - ₱10,000</li>
                <li>#00005 - ₱2,000</li>
              </ul>
            </div>
          </div>
          <div className="dashboard-graph">
            {/* Your Graph Content Here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
