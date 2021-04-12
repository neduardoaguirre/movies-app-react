import React from 'react';

const Movie = () => {
  return (
    <div className="col-md-6 col-lg-3 mb-3 align-self-center">
      <div className="card bg-secondary">
        <img
          src="https://image.tmdb.org/t/p/w1280/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg"
          alt=""
          className="card-img-top"
        />

        <div className="card-body d-flex justify-content-between align-items-center">
          <span className="card-text">Title</span>
          <span className="card-text">7.4</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
