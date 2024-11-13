import React from 'react';

const MovieSeatBooking = () => {
  return (
    <div>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
    </div>
  );
};

export default MovieSeatBooking;