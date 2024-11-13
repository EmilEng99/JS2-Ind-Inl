import React from "react";
import PropTypes from "prop-types";

const MovieDropdown = ({ movies, changeMovieOption }) => {
  return (
    <select id="movie" className="movie-dropdown" onChange={changeMovieOption} defaultValue="">
      <option value="" disabled>
        Välj en film...
      </option>
      {/* loopar igenom alla filmer och skapar en option för varje film */}
      {movies.map((movie) => (
        <option key={movie.titel} value={movie.pris}>
          {movie.titel} ({movie.pris} kr)
        </option>
      ))}
    </select>
  );
};

MovieDropdown.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      titel: PropTypes.string.isRequired,
      pris: PropTypes.number.isRequired,
    })
  ).isRequired,
  changeMovieOption: PropTypes.func.isRequired,
};

export default MovieDropdown;
