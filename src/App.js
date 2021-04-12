import React from 'react';
import Form from './components/Form';
import MovieListing from './components/MoviesListing';

import MoviesProviders from './context/Movies';
import OverviewProvider from './context/Overview';

function App() {
  return (
    <MoviesProviders>
      <OverviewProvider>
        <div className="container">
          <div className="row">
            <Form />
          </div>
          <MovieListing />
        </div>
      </OverviewProvider>
    </MoviesProviders>
  );
}

export default App;
