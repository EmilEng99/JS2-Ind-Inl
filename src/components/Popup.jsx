import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Popup = ({ isVisible, onClose, clickedSeats, totalPrice, resetBooking }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  // Formulärhantering när användaren skriver i input-fälten
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Formulärhantering när användaren skickar formuläret
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onClose();
    resetBooking();
    setFormData({ name: '', number: '' }); 
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Din bokning</h2>
        <p>Du har valt {clickedSeats.length} platser till priset av {totalPrice} kr.</p>
        
        <form onSubmit={handleFormSubmit}>
          <div className="form-info">
            <label htmlFor="name">Namn:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-info">
            <label htmlFor="number">Nummer:</label>
            <input
              type="text"
              id="number"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Boka biljett</button>
        </form>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  clickedSeats: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  resetBooking: PropTypes.func.isRequired,
};

export default Popup;
