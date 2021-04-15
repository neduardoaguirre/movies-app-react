import React, { useState, useContext } from 'react';
import ModalOverview from './ModalOverview';
import PropTypes from 'prop-types';

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
          <button
            className="btn btn-link text-white shadow-none p-0 text-left"
            onClick={() => {
              setMovieId(id);
              handleOpen();
            }}
          >
            {title}
          </button>

          <div
            className={`rounded bg-${voteAverage(vote)} ml-2 p-2 text-white`}
          >
            {vote}
          </div>
          <ModalOverview open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
