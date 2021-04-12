import React, { useContext } from 'react';
import Movie from './Movie';

import { MoviesContext } from '../context/Movies';

const MoviesListing = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          vote={movie.vote_average}
          poster={movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default MoviesListing;
