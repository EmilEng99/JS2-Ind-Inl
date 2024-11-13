import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import MovieDropdown from "./MovieDropdown";

const DisplayMovies = ({ changeMovieOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const baseUrl =  "";

      try {
        const response = await fetch(`${baseUrl}/movies.json`); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const moviesData = await response.json();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
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