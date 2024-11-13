import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import MovieDropdown from "./MovieDropdown";

const DisplayMovies = ({ changeMovieOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      
      try {
        const response = await fetch(`https://gist.githubusercontent.com/EmilEng99/de62bc7771123055368a431ceffa3d4a/raw/bcb258b74e56e2c2b3ca2877e8594ab6efd49047/gistfile1.txt`); // Använd `baseUrl` här
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