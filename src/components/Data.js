import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../hooks/useJsonFetch';
import Loading from "./Loading";

function Data({ pathname, description }) {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_URL}${pathname}`);
  console.log(pathname, description, data, isLoading, error)

  return (
    <div className="Data">
      {description}
      :
      { isLoading && <Loading/>}
      { error && <p style={{ color: 'red' }}>Internal Server Error</p> }
      { data && <p style={{ color: 'green' }}>{data.status}</p> }
    </div>
  );
}

Data.defaultProps = {
  description: '',
};

Data.propTypes = {
  pathname: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Data;