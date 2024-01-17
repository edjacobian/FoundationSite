import React from 'react';

const MonthCalendar = ({ currentMonth, goToPrevMonth, goToNextMonth }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Dummy data for events (replace actual data)
  const events = [
    { month: 0, day: 12, description: 'Annual Meeting' },
    // Add more events as needed
  ];

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  // Create an array with the days of the month
  const monthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="monthly-calendar">
      <div className="calendar-header">
        <button onClick={goToPrevMonth}>&lt;</button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        <div className="days-of-week">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days-of-month">
          {monthDays.map((day) => (
            <div key={day} className="day">
              <span className="day-number">{day}</span>
              <div className="events">
                {events
                .filter((event) => event.month === currentMonth.getMonth() && event.day === day)
                .map((event) => (
                  <div key={event.description} className="event">
                    {event.description}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthCalendar;
