import React, { useContext } from 'react';
import Movie from './Movie';
import Spinner from './Spinner';
import Error from './Error';

import { MoviesContext } from '../context/Movies';

const MoviesListing = () => {
  const { movies, loading } = useContext(MoviesContext);

  const element = loading ? (
    <Spinner />
  ) : movies.length > 0 ? (
    movies.map((movie) => (
      <Movie
        key={movie.id}
        title={movie.title}
        vote={movie.vote_average}
        poster={movie.poster_path}
        id={movie.id}
      />
    ))
  ) : (
    <div className="d-flex justify-content-center col-12">
      <Error message="Not Found" />
    </div>
  );

  return <div className="row mt-4">{element}</div>;
};

export default MoviesListing;
