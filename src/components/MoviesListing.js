import React, { useContext } from 'react';
import Movie from './Movie';

import { MoviesContext } from '../context/Movies';

const MoviesListing = () => {
  const { movies } = useContext(MoviesContext);
  console.log(movies);
  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          vote={movie.vote_average}
          poster={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default MoviesListing;
