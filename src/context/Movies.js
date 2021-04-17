import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const URL = `/.netlify/functions/getMovies`;
      const res = await axios.get(URL);
      const data = res.data.results;
      setLoading(false);
      setMovies(data);
    };
    getMovies();
  }, []);

  useEffect(() => {
    if (query) {
      const searchMovie = async () => {
        const URL = `/.netlify/functions/searchMovie?query=${search}`;
        const res = await axios.get(URL);
        const data = res.data.results;
        setLoading(false);
        data.length === 0 ? setEmpty(true) : setMovies(data);
      };
      searchMovie();
      setQuery(false);
    }
  }, [search, empty, query]);

  return (
    <MoviesContext.Provider
      value={{ movies, loading, empty, setSearch, setQuery, setLoading }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
