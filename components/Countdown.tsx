'use client';

import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-28T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-white text-center mb-8 hover:text-yellow-300 transition-colors duration-300">
        Summit Countdown
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center group">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2 hover:bg-white/30 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                {unit.value.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm font-medium text-white/80 uppercase tracking-wider group-hover:text-white transition-colors duration-300">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
