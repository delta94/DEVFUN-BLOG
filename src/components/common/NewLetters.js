import React from 'react';
import TextField from '@material-ui/core/TextField';
import Socials from './Socials';

const NewLetters = () => {
  return (
    <div>
      <p style={{ marginBottom: 20 }}>
        Well deliver fresh WordPress jobs right to your inbox!
      </p>
      <TextField label="Email" variant="filled" style={{ color: '#FFF' }} />
      <div style={{ marginTop: 20 }}>
        <Socials />
      </div>
    </div>
  );
};

NewLetters.propTypes = {};

export default NewLetters;
