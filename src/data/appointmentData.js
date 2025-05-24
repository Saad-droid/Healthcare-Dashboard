export const calendarData = {
    month: "October 2021",
    days: [
      { date: 25, day: "Mon", times: ["10:00", "--", "12:00"] },
      { date: 26, day: "Tues", times: ["08:00", "09:00", "10:00"] },
      { date: 27, day: "Wed", times: ["10:30", "13:00","--"] },
      { date: 28, day: "Thurs", times: ["10:00", "11:00","--"] },
      { date: 29, day: "Fri", times: ["14:00", "16:00"] },
      { date: 30, day: "Sat", times: ["12:00", "14:00", "15:00"] },
      { date: 31, day: "Sun", times: ["09:00", "10:00", "11:00"] }
    ]
  };
  
  export const featuredAppointments = [
    {
      id: 1,
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      type: "dentist"
    },
    {
      id: 2,
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
      type: "physiotherapy"
    }
  ];
  
  export const upcomingSchedule = [
    {
      day: "On Thursday",
      appointments: [
        {
          id: 1,
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: "💉",
          type: "checkup"
        },
        {
          id: 2,
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: "eye",
          type: "specialist"
        }
      ]
    },
    {
      day: "On Saturday",
      appointments: [
        {
          id: 3,
          title: "Cardiologist",
          time: "12:00 AM",
          icon: "heart",
          type: "heart"
        },
        {
          id: 4,
          title: "Neurologist",
          time: "16:00 PM",
          icon: "brain",
          type: "person"
        }
      ]
    }
  ];
  
  export const activityData = {
    weeklyStats: "3 appointments on this week",
    chartData: [
      { day: "Mon", value: 8 },
      { day: "Tues", value: 12 },
      { day: "Wed", value: 6 },
      { day: "Thurs", value: 15 },
      { day: "Fri", value: 10 },
      { day: "Sat", value: 14 },
      { day: "Sun", value: 9 }
    ]
  };
  