import React, { Component } from 'react';

class Preview extends Component {
  static propTypes = {
    value: PropTypes.node
  };

  render() {
    const { value } = this.props;
    return (
      <p>
        <strong>Icon: </strong>
        {value}
      </p>
    );
  }
}

export default Preview;
