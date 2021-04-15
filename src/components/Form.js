import React, { useState, useContext } from 'react';
import Error from './Error';

import { MoviesContext } from '../context/Movies';

const Form = () => {
  const { setSearch, setQuery, setLoading } = useContext(MoviesContext);

  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setSearch(movie);
    setQuery(true);
  };

  return (
    <form className="col-12 mt-4" onSubmit={handleSubmit}>
      <fieldset className="text-center text-white">
        <legend>Movies App</legend>
      </fieldset>
      <div className="row mt-2">
        <div className="form-group col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 mb-2">
          <input
            type="text"
            placeholder="Star Wars, Psycho, The Godfather..."
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <input
            type="submit"
            className="btn btn-block btn-warning text-uppercase outline-none"
            value="Search"
          />
          {error ? <Error message="Please, add search topic" /> : null}
        </div>
      </div>
    </form>
  );
};

export default Form;
