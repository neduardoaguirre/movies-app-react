import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const searchMovie = async () => {
        const URL = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${search}`;
        const res = await axios.get(URL);
        setLoading(false);
        setMovies(res.data.results);
      };
      searchMovie();
    } else {
      const getMovies = async () => {
        setLoading(true);
        const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
        const res = await axios.get(URL);
        setLoading(false);
        setMovies(res.data.results);
      };
      getMovies();
    }
  }, [query, search]);

  return (
    <MoviesContext.Provider
      value={{ movies, loading, setSearch, setQuery, setLoading }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
