import React from 'react';
import PropTypes from 'prop-types';

const SeatLayout = ({ seats, clickedSeats = [], setClickedSeats, ticketPrice }) => {
  
  // Funktion för iklickade stolar
  const handleSeatClick = (rowIndex, seatId) => {
    // Om biljettpriset är 0, returnera
    if (ticketPrice === 0) return;

    // Uppdatera state för valda stolar
    setClickedSeats((prevSelectedSeats) => {
      const isAlreadySelected = prevSelectedSeats.includes(seatId);
      if (isAlreadySelected) {
        return prevSelectedSeats.filter((id) => id !== seatId); 
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  return (
    <div className="container">
      <div className="screen"></div>
      {seats.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${seat.occupied ? 'occupied' : ''} ${clickedSeats?.includes(seat.id) ? 'selected' : ''} ${ticketPrice === 0 ? 'disabled' : ''}`}
              onClick={() => handleSeatClick(rowIndex, seat.id)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

SeatLayout.propTypes = {
  seats: PropTypes.array.isRequired,
  clickedSeats: PropTypes.array,
  setClickedSeats: PropTypes.func.isRequired,
  ticketPrice: PropTypes.number.isRequired, // Ny prop för biljettpriset
};

export default SeatLayout;
