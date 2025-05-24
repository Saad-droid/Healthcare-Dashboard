import React from 'react';
import CalendarView from '../calenderView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../Activity/ActivityFeed';
import './DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';

function DashboardMainContent() {
  return (
    <main className="main-content">
    <div className="dashboard-header">
      <div>
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="time-filter">
        <span>This Week</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    
    <div className="dashboard-grid">
      <div className="left-column">
      <DashboardOverview/>
      <ActivityFeed />
      
      </div>
     
      
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  </main>
  );
}

export default DashboardMainContent;