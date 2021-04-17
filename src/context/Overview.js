import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const OverviewContext = createContext();

const OverviewProvider = (props) => {
  const [movieId, setMovieId] = useState(null);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getOverview = async () => {
      if (!movieId) return;
      const URL = `/.netlify/functions/getOverview?movieId=${movieId}`;
      const res = await axios.get(URL);
      setInfo(res.data);
    };
    getOverview();

    return () => {
      setInfo({});
    };
  }, [movieId]);

  return (
    <OverviewContext.Provider value={{ info, setMovieId }}>
      {props.children}
    </OverviewContext.Provider>
  );
};

export default OverviewProvider;
