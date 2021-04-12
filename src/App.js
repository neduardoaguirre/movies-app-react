import React from 'react';
import Form from './components/Form';
import MovieListing from './components/MoviesListing';

import MoviesProviders from './context/Movies';

function App() {
  return (
    <MoviesProviders>
      <div className="container">
        <div className="row">
          <Form />
        </div>
        <MovieListing />
      </div>
    </MoviesProviders>
  );
}

export default App;
