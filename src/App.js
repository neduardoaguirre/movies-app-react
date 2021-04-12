import React from 'react';
import Form from './components/Form';
import MovieListing from './components/MoviesListing';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Form />
      </div>
      <MovieListing />
    </div>
  );
}

export default App;
