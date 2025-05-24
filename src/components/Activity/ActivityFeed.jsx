import React from 'react';
import './ActivityFeed.css';

const activityData = [
  { day: 'Mon', bars: ['#D3D3D3', '#00D8FF', '#CCCCCC'] },
  { day: 'Tues', bars: ['#00D8FF', '#6F42C1', '#D3D3D3', '#6F42C1'] },
  { day: 'Wed', bars: ['#D3D3D3', '#00D8FF', '#CCCCCC', '#6F42C1'] },
  { day: 'Thurs', bars: ['#6F42C1', '#D3D3D3', '#CCCCCC'] },
  { day: 'Fri', bars: ['#00D8FF', '#CCCCCC', '#6F42C1'] },
  { day: 'Sat', bars: ['#D3D3D3', '#00D8FF', '#6F42C1'] },
  { day: 'Sun', bars: ['#D3D3D3', '#00D8FF', '#CCCCCC', '#6F42C1'] },
];

const ActivityChart = () => {
  return (
    <div className="activity-chart-container">
      <div className="chart-header">
        <span className="title">Activity</span>
        <span className="summary">3 appointment on this week</span>
      </div>
      <div className="chart-bars">
        {activityData.map((day, i) => (
          <div key={i} className="chart-day">
            <div className="day-bars">
              {day.bars.map((color, j) => (
                <div
                  key={j}
                  className="bar"
                  style={{
                    height: `${30 + (j % 3) * 15}px`,
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
            <div className="day-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
