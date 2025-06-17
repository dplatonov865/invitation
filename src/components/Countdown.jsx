import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const weddingDate = new Date('2025-08-16 15:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <h2>До свадьбы осталось:</h2>
      <div className="timer">
        <div>
          <span>{timeLeft.days}</span>
          <p>дней</p>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <p>часов</p>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p>минут</p>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <p>секунд</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;