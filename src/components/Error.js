import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div className="form-group mt-2 text-center alert alert-danger text-uppercase">
      {message}
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
