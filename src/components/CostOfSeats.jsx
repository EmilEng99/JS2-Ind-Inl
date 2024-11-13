import React from 'react';
import PropTypes from 'prop-types';

const CostOfSeats = ({ clickedSeats, totalPrice, takeMeToCheckout }) => {
  
  // Visar knappen om det finns valda platser
  const showBookingButton = clickedSeats.length > 0;

  return (
    <div>
      <p className="text">
        Du har valt <span id="count">{clickedSeats.length}</span> platser till priset av <span id="total">{totalPrice} kr</span>
      </p>
      {showBookingButton && (
        <button className="booking-button" onClick={takeMeToCheckout}>
          Ta mig till kassan
        </button>
      )}
    </div>
  );
};

CostOfSeats.propTypes = {
  clickedSeats: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  takeMeToCheckout: PropTypes.func.isRequired,
};

export default CostOfSeats;