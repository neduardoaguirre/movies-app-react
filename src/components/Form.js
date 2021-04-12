import React, { useState } from 'react';
import Error from './Error';

const Form = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    console.log(search);
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
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="form-group col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <input
            type="submit"
            className="btn btn-block btn-warning text-uppercase outline-none"
            value="Search"
          />{' '}
          {error ? <Error message="Please, add search topic" /> : null}
        </div>
      </div>
    </form>
  );
};

export default Form;
