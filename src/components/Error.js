import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="form-group mt-2 text-center alert alert-danger text-uppercase">
      {message}
    </div>
  );
};

export default Error;
