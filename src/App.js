import React from 'react';
import './App.css';
import DashboardMainContent from './components/Dashboard/DashboardMainContent';
import Sidebar from './components/SideBar/Sidebar';
import AppHeader from './components/Header/Header';

function App() {
  return (
    <div className="app-container">
      <Sidebar/>
      <div className="main-content">
        <AppHeader/>
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;