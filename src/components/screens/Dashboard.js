import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import logo from '../img/Logo/kioscorp.png';  // Import the image

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/sign-in');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div>
          <div className="dashboard-logo">
            <img src={logo} alt="KiosCorp Logo" />
          </div>
          <div className="dashboard-menu">
            <a href="#" className="dashboard-menu-item active">
              <i className="fas fa-bars"></i>
              Menu
            </a>
            <a href="#" className="dashboard-menu-item">
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
            <h1>Welcome,</h1>
            <h2>Inventory Management System</h2>
          </div>
          <div className="dashboard-header-info">
            <span>Universal Auto Supply and Bolt Center</span>
            <span>June 22, 2024 09:47</span>
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
