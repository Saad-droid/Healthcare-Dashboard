import React from 'react';
import './AppHeader.css';
import { FaSearch } from 'react-icons/fa'; // FontAwesome

import { FaPlus } from "react-icons/fa";

import { FaBell } from "react-icons/fa6";


function AppHeader() {
  return (
    <header className="header">
    <div className="header-left">
    
      
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>
      <button className="notification-btn">
        <FaBell className="w-5 h-5" />
        <span className="notification-badge"></span>
      </button>
    </div>

    <div className="header-right">
     
      
      <div className="user-avatar">
        <span className="user-initials">👨🏻‍🦰</span>
      </div>
      
      <button className="add-btn">
        <FaPlus className="w-4 h-4" />
      </button>
    </div>
  </header>
  );
}

export default AppHeader;