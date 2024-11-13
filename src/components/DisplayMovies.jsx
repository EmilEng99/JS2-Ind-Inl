import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import MovieDropdown from "./MovieDropdown";

const DisplayMovies = ({ changeMovieOption }) => {
  const [movies, setMovies] = useState([]);

  //Hämtar filmer från JSON-fil
  useEffect(() => {
    const fetchMovies = async () => {

      const response = await fetch('/movies.json');
      
      if (response.ok) {
        const movies = await response.json();
        setMovies(movies);
      } else {
        console.error("Kunde inte hämta filmer");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <MovieDropdown movies={movies} changeMovieOption={changeMovieOption} />
    </div>
  );
};

DisplayMovies.propTypes = {
  changeMovieOption: PropTypes.func.isRequired,
};

export default DisplayMovies;
