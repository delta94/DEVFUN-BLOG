import React, { Component } from 'react';
import axios from 'axios';

class Control extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    classNameWrapper: PropTypes.string.isRequired
  };

  handleImageUpload = async image => {
    const data = new FormData();
    const { onChange } = this.props;
    data.append('file', image);
    data.append('upload_preset', 'geopins');
    data.append('cloud_name', 'coders-tokyo-shyn');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/coders-tokyo-shyn/image/upload',
      data
    );
    onChange(res.data.url);
  };

  render() {
    const { classNameWrapper, forID } = this.props;
    return (
      <input
        accept="image/*"
        type="file"
        id={forID}
        className={classNameWrapper}
        onChange={e => this.handleImageUpload(e.target.files[0])}
      />
    );
  }
}

export default Control;
