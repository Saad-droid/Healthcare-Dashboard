import React from 'react';
import { healthStatusData } from '../../data/healthData';
import './HealthStatusCards.css';

function HealthStatusCards() {
    const getStatusColor = (status) => {
        switch (status) {
          case 'good':
            return 'progress-good';
          case 'warning':
            return 'progress-warning';
          case 'needs-attention':
            return 'progress-attention';
          default:
            return 'progress-good';
        }
      };
    
      const getIcon = (title) => {
        switch (title) {
          case 'Lungs':
            return '🫁';
          case 'Teeth':
            return '🦷';
          case 'Bone':
            return '🦴';
          default:
            return '💉';
        }
      };
    
  return (
    <div className="health-status-cards">
      {healthStatusData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="card-header">
            <span className="card-icon">{getIcon(item.title)}</span>
            <div className="card-info">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-date">{item.date}</p>
            </div>
          </div>
          
          <div className="progress-bar">
            <div
              className={`progress-fill ${getStatusColor(item.status)}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
          
          <div className="card-footer">
            <a href="/#" className="details-btn">
              Details →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;