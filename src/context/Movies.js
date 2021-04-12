import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(query);
    if (!query) {
      const getMovies = async () => {
        const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
        const res = await axios.get(URL);
        console.log(res.data.results);
        setMovies(res.data.results);
      };
      getMovies();
    } else {
      const searchMovie = async () => {
        const URL = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${search}`;
        const res = await axios.get(URL);
        console.log(res.data.results);
        setMovies(res.data.results);
      };
      searchMovie();
    }
  }, [query, search]);

  return (
    <MoviesContext.Provider value={{ movies, setSearch, setQuery }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
