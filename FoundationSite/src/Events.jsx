import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';
import MonthCalendar from './MonthCalendar';

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthOpen, setMonthOpen] = useState({
    january: false,
    february: false,
    march: false,
    april: false,
    may: false,
    june: false,
    july: false,
    august: false,
    september: false,
    october: false,
    november: false,
    december: false,
  });
  const [confetti, setConfetti] = useState(false);


  const goToPrevMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
  };

  const toggleMonth = (month) => {
    setMonthOpen((prev) => ({
      ...prev,
      [month]: !prev[month],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {

      const scrollThreshold = 75;
  
      const scrolledToThreshold = window.scrollY >= scrollThreshold;
  
      if (scrolledToThreshold) {
        setConfetti(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="year">
        <h1>2024</h1>
      <div>
      <MonthCalendar currentMonth={currentMonth} goToPrevMonth={goToPrevMonth} goToNextMonth={goToNextMonth} />
      </div>
        <h2 id='seebelow'>See Below For Calendar of Events</h2>
      </div>
      <div>
        <div className={`month ${monthOpen['january'] ? 'open' : ''}`} onClick={() => toggleMonth('january')}>
          <h2>JANUARY {!monthOpen['january'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['january'] && (
            <div className="event-details">
              {/* Stuff for January goes here */}
              <p>Event details for January</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['february'] ? 'open' : ''}`} onClick={() => toggleMonth('february')}>
          <h2>FEBRUARY {!monthOpen['february'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['february'] && (
            <div className="event-details">
              {/* Stuff for February goes here */}
              <p>Event details for February</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['march'] ? 'open' : ''}`} onClick={() => toggleMonth('march')}>
          <h2>MARCH {!monthOpen['march'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['march'] && (
            <div className="event-details">
              {/* Stuff for March goes here */}
              <p>Event details for March</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['april'] ? 'open' : ''}`} onClick={() => toggleMonth('april')}>
          <h2>APRIL {!monthOpen['april'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['april'] && (
            <div className="event-details">
              {/* Stuff for April goes here */}
              <p>Event details for April</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['may'] ? 'open' : ''}`} onClick={() => toggleMonth('may')}>
          <h2>MAY {!monthOpen['may'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['may'] && (
            <div className="event-details">
              {/* Stuff for May goes here */}
              <p>Event details for May</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['june'] ? 'open' : ''}`} onClick={() => toggleMonth('june')}>
          <h2>JUNE {!monthOpen['june'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['june'] && (
            <div className="event-details">
              {/* Stuff for June goes here */}
              <p>Event details for June</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['july'] ? 'open' : ''}`} onClick={() => toggleMonth('july')}>
          <h2>JULY {!monthOpen['july'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['july'] && (
            <div className="event-details">
              {/* Stuff for July goes here */}
              <p>Event details for July</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['august'] ? 'open' : ''}`} onClick={() => toggleMonth('august')}>
          <h2>AUGUST {!monthOpen['august'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['august'] && (
            <div className="event-details">
              {/* Stuff for August goes here */}
              <p>Event details for August</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['september'] ? 'open' : ''}`} onClick={() => toggleMonth('september')}>
          <h2>SEPTEMBER {!monthOpen['september'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['september'] && (
            <div className="event-details">
              {/* Stuff for September goes here */}
              <p>Event details for September</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['october'] ? 'open' : ''}`} onClick={() => toggleMonth('october')}>
          <h2>OCTOBER {!monthOpen['october'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['october'] && (
            <div className="event-details">
              {/* Stuff for October goes here */}
              <p>Event details for October</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['november'] ? 'open' : ''}`} onClick={() => toggleMonth('november')}>
          <h2>NOVEMBER {!monthOpen['november'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['november'] && (
            <div className="event-details">
              {/* Stuff for November goes here */}
              <p>Event details for November</p>
            </div>
          )}
        </div>
        <br />

        <div className={`month ${monthOpen['december'] ? 'open' : ''}`} onClick={() => toggleMonth('december')}>
          <h2>DECEMBER {!monthOpen['december'] ? '(Click to expand)' : '(Click to collapse)'}</h2>
          {monthOpen['december'] && (
            <div className="event-details">
              {/* Stuff for December goes here */}
              <p>Event details for December</p>
            </div>
          )}
        </div>
        <Confetti active={confetti} config={{ angle: 90, spread: 600, startVelocity: 200, elementCount: 500, colors: ['#4169E1', '#E6E6FA', '#483D8B'] }} />
      </div>
    </div>
  );
};

export default Events;
