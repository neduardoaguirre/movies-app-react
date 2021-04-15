import React, { useContext } from 'react';
import Movie from './Movie';
import Spinner from './Spinner';
import Error from './Error';

import { MoviesContext } from '../context/Movies';

const MoviesListing = () => {
  const { movies, loading, empty } = useContext(MoviesContext);

  const element = loading ? (
    <Spinner />
  ) : !empty ? (
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
    <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
      <Error message="Not Found. Please try again." />
    </div>
  );

  return <div className="row mt-4">{element}</div>;
};

export default MoviesListing;
