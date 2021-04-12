import React, { useState, useContext } from 'react';
import ModalOverview from './ModalOverview';

import { OverviewContext } from '../context/Overview';

const Movie = ({ title, vote, poster, id }) => {
  const [open, setOpen] = useState(false);
  const { setMovieId } = useContext(OverviewContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const PATH_IMG = 'https://image.tmdb.org/t/p/w1280';

  const voteAverage = (vote) => {
    if (vote >= 8) {
      return 'success';
    } else if (vote >= 6) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  return (
    <div className="col-md-6 col-lg-3 mb-3 align-self-center">
      <div className="card bg-secondary">
        {poster ? (
          <img src={PATH_IMG + poster} alt={title} className="card-img-top" />
        ) : null}
        <div className="card-body d-flex justify-content-between align-items-center">
          {/* <span className="card-text text-white pr-2">{title}</span> */}
          {/* <input type="submit" value={title} className="pr-2" /> */}
          <button
            className="btn btn-link text-white btn-outline-*"
            onClick={() => {
              setMovieId(id);
              handleOpen();
            }}
          >
            {title}
          </button>

          <div className={`rounded bg-${voteAverage(vote)} p-2 text-white`}>
            {vote}
          </div>
          <ModalOverview open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
