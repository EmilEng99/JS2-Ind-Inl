import { useState, useEffect } from 'react';
import { initialSeats } from './seatData';

const useMovieSeatBooking = () => {
  // States för bokningen  
  const [seats, setSeats] = useState(initialSeats);
  const [clickedSeats, setClickedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Hindra användaren från att välja platser om biljettpriset är 0
  const handleSeatClick = (rowIndex, seatId) => {
    if (ticketPrice === 0) {
      return;
    }

    //Hantering av klickade stolar
    setSeats(prevSeats =>
      prevSeats.map((row, rIndex) =>
        row.map(seat => {
          if (rIndex === rowIndex && seat.id === seatId && !seat.occupied) {
            return { ...seat, selected: !seat.selected };
          }
          return seat;
        })
      )
    );

    // Uppdatera array baserat på om stol är klickad eller ej
    setClickedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(id => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  // Uppdatera totalpriset när användaren väljer platser
  useEffect(() => {
    setTotalPrice(clickedSeats.length * ticketPrice);
  }, [clickedSeats, ticketPrice]);

  // Uppdatera biljettpriset när användaren väljer en film
  const changeMovieOption = event => setTicketPrice(+event.target.value);

  // Funktion för att återställa bokningen
  const resetBooking = () => {
    setSeats(initialSeats);
    setClickedSeats([]);
    setTotalPrice(0);
    setTicketPrice(0);
    setIsPopupVisible(false);
  };

  // Funktion för att stänga popup-fönstret
  const handlePopupClose = () => setIsPopupVisible(false);

  // Visa knappen om det finns valda platser
  const showPopupButton = clickedSeats.length > 0;

  return {
    seats,
    clickedSeats,
    setClickedSeats,
    totalPrice,
    ticketPrice,
    isPopupVisible,
    setIsPopupVisible,
    showPopupButton,
    handleSeatClick,
    changeMovieOption,
    resetBooking,
    handlePopupClose,
  };
};

export default useMovieSeatBooking;
