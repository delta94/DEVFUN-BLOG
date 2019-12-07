import React from 'react';
import Socials from './Socials';

const NewLetters = () => {
  return (
    <div>
      <p className="mb-30">
        Well deliver fresh WordPress jobs right to your inbox!
      </p>
      <input type="text" placeholder="Enter your email" className="mb-40" />
      <Socials />
    </div>
  );
};

NewLetters.propTypes = {};

export default NewLetters;
