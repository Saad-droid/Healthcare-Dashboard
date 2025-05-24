import React from 'react';
import { calendarData, featuredAppointments } from '../../data/appointmentData';
import './CalendarView.css'
import { LuChevronsLeftRightEllipsis } from "react-icons/lu";


function CalendarView() {
  return (
    <div className="calendar-view">
    <div className="calendar-header">
      <h2 className="calendar-title">{calendarData.month}</h2>
     <span  className='arrow-tiitle'><LuChevronsLeftRightEllipsis /> </span>
      
      <div className="calendar-nav">
        <button className="nav-btn">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="nav-btn">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    
    <div className="calendar-weekdays">
      {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
        <div key={day} className="weekday">
          {day}
        </div>
      ))}
    </div>
    
    <div className="calendar-grid">
      {calendarData.days.map((day, index) => (
        <div key={index} className="calendar-day">
          <div className="day-number">{day.date}</div>
          <div className="day-times">
            {day.times.map((time, timeIndex) => (
              <div key={timeIndex}   className={`time-slot ${time === "09:00" || (time === "11:00" && timeIndex===0) || (time === "12:00" && timeIndex===0)? 'highlighted-slot' : ''}`}>
                {time}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    <div className="featured-appointments">
      {featuredAppointments.map((appointment) => (
        <div
          key={appointment.id}
          className={`appointment-card ${
            appointment.type === 'dentist' 
              ? 'appointment-dentist' 
              : 'appointment-default'
          }`}
        >
          <div className="appointment-header">
           
            <span className="appointment-title">{appointment.title}</span>
            <span className="appointment-icon">
              {appointment.type === 'dentist' ? '🦷' : '🏃‍♂️'}
            </span>
          </div>
          <p className="appointment-time">{appointment.time}</p>
          <p className="appointment-doctor">{appointment.doctor}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
export default CalendarView;
