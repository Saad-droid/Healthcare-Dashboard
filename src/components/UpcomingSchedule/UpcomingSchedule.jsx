import { upcomingSchedule } from '../../data/appointmentData';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'checkup':
        return '💉';
      case 'specialist':
        return '👁️';
        case 'person':
        return '👨🏻‍⚕️';
        case 'heart':
        return '❤️';
      default:
        return '📅';
    }
  };

  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      
      <div className="schedule-content">
        {upcomingSchedule.map((dayGroup, dayIndex) => (
          <div key={dayIndex} className="day-group">
            <h3 className="day-title">{dayGroup.day}</h3>
            
            <div className="appointments-grid">
              {dayGroup.appointments.map((appointment) => (
                <div key={appointment.id} className="schedule-appointment">
                  <div className="appointment-content">
                    <div className="appointment-details">
                      <h4 className="schedule-appointment-title">{appointment.title}</h4>
                      <p className="schedule-appointment-time">{appointment.time}</p>
                    </div>
                    <div className="appointment-icon-container">
                      <span className="schedule-appointment-icon">{getIcon(appointment.type)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
