import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="../img/Logo/kioscorp.png" alt="KiosCorp Logo" />
        </div>
        <div className="sidebar-menu">
          <a href="#" className="menu-item active">Dashboard</a>
          <a href="#" className="menu-item">Inventory</a>
          <a href="#" className="menu-item">Sales</a>
          <a href="#" className="menu-item">Orders</a>
          <a href="#" className="menu-item">Customers</a>
        </div>
      </div>
      <div className="main-content">
        <header className="header">
          <div className="header-content">
            <h1>Welcome,</h1>
            <h2>Inventory Management System</h2>
          </div>
          <div className="header-info">
            <span>Universal Auto Supply and Bolt Center</span>
            <span>June 22, 2024 09:47</span>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Hi Albert,</h3>
            </div>
            <div className="summary-card">
              <h3>Monthly Sales</h3>
              <p>₱ 15,000</p>
              <p>Increase 10%</p>
            </div>
            <div className="summary-card">
              <h3>Recent Order</h3>
              <ul>
                <li>#00001 - ₱15,000</li>
                <li>#00002 - ₱500</li>
                <li>#00003 - ₱200</li>
                <li>#00004 - ₱10,000</li>
                <li>#00005 - ₱2,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
