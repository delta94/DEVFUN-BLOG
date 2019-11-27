import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ value }) => {
  return (
    <p>
      <strong>Icon: </strong>
      <img src={value} alt="gatsby" />
    </p>
  );
};

Preview.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Preview;
