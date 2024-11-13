import React from 'react';
import './App.css';
import DisplayMovies from './components/DisplayMovies';
import SeatLayout from './components/SeatLayout';
import CostOfSeats from './components/CostOfSeats';
import Popup from './components/Popup';
import useMovieSeatBooking from './hooks/useMovieSeatBooking';

function App() {
  const {
    seats,
    clickedSeats,
    totalPrice,
    ticketPrice, 
    setClickedSeats,
    isPopupVisible,
    setIsPopupVisible,
    changeMovieOption,
    resetBooking,
    handlePopupClose,
  } = useMovieSeatBooking();

  return (
    <div className="App">
      <DisplayMovies changeMovieOption={changeMovieOption} />
      
      <SeatLayout 
        seats={seats} 
        clickedSeats={clickedSeats} 
        setClickedSeats={setClickedSeats} 
        ticketPrice={ticketPrice} 
      />
      
      <CostOfSeats 
        clickedSeats={clickedSeats} 
        totalPrice={totalPrice} 
        takeMeToCheckout={() => setIsPopupVisible(true)}
      />

      <Popup
        isVisible={isPopupVisible}
        onClose={handlePopupClose}
        clickedSeats={clickedSeats}
        totalPrice={totalPrice}
        resetBooking={resetBooking}
      />
    </div>
  );
}

export default App;
