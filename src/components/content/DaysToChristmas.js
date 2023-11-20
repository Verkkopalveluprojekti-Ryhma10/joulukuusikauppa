import React, { useState, useEffect } from 'react';

const CountdownToChristmas = () => {
  // State variable to calculate remaining time in days, hours, minutes, and seconds
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set Christmas day date
    const christmasDate = new Date('2023-12-24'); 

    // Set interval to update every 1 second
    // https://www.geeksforgeeks.org/javascript-date-gettime-method/?ref=header_search
    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = christmasDate.getTime() - currentTime.getTime();

      // Calculate remaining time in days, hours, minutes, and seconds
      // https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Set remaining time to the state variable
      setTimeLeft({ days, hours, minutes, seconds });

      // If the remaining time is negative (already passed), clear the interval
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    // action stops the setInterval operation that was previously set
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Display the remaining time in days, hours, minutes, and seconds 
        .padstart method first parameter (2) represents final length of the string and
        second parameter ('0') adds a leading zero if necessary*/}
      <h3>
        Aattolaskuri: 
        {` ${timeLeft.days} päivää, ${timeLeft.hours.toString().padStart(2, '0')} tuntia, ${timeLeft.minutes.toString().padStart(2, '0')} minuuttia, ${timeLeft.seconds.toString().padStart(2, '0')} sekuntia`}
      </h3>
    </div>
  );
};

export default CountdownToChristmas;