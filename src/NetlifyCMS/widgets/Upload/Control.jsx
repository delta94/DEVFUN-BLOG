import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Control = ({ classNameWrapper, forID, onChange }) => {
  const handleImageUpload = async image => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'geopins');
    data.append('cloud_name', 'coders-tokyo-shyn');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/coders-tokyo-shyn/image/upload',
      data,
    );
    onChange(res.data.url);
  };

  return (
    <input
      accept="image/*"
      type="file"
      id={forID}
      className={classNameWrapper}
      onChange={e => handleImageUpload(e.target.files[0])}
    />
  );
};

Control.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
};

export default Control;
