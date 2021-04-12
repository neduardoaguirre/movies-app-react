import React from 'react';

const Movie = ({ title, vote, poster, overview }) => {
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
          <span className="card-text text-white pr-2">{title}</span>
          <div className={`rounded bg-${voteAverage(vote)} p-2 text-white`}>
            {vote}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
