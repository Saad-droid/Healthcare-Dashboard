import React from 'react';
import './AnatomySection.css';
import anatomy from "../../assets/image2.png"

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-content">
        <div className="anatomy-figure">
         <img
         className='anatomy-img '
         src={anatomy}
         alt='human-body'
         />
          
          <div className="heart-indicator">
            <div className="heart-badge">
              <span>❤️</span>
              <span>Healthy Heart</span>
            </div>
          </div>
        </div>
        
        <div className="health-log-btn">
          <button className="log-button">
            <span>🦵🏻</span>
            <span>Healthy Leg</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;