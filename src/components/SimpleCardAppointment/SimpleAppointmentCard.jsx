
// components/SimpleAppointmentCard.js
import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-appointment-card">
      <div className="dot" />
      <div className="content">
        <p className="title">{title}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;