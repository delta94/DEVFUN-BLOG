/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Button from '@material-ui/core/Button';

const HideMe = () => {
  return (
    <div className="flex flex-col center">
      <h2 className="text-700-60px-51px title-color">
        Do you want to hire me?
      </h2>
      <p className="mt-5 text-20px-23px title-color">
        If so, you can take a look at my CV and send me an e-mail.
      </p>
      <div className="flex justify-between w-1/3 my-8">
        <a
          href="https://drive.google.com/file/d/1cZg7yhQcurpBJ4NlMmFHYhgZ5_UtKteq/view"
          target="_blank"
          className="no-underline"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 20, borderRadius: 99999 }}
          >
            RESUME
          </Button>
        </a>
        <a
          href="https://drive.google.com/file/d/1cZg7yhQcurpBJ4NlMmFHYhgZ5_UtKteq/view"
          className="no-underline"
        >
          <Button
            variant="contained"
            color="default"
            size="large"
            style={{ marginTop: 20, borderRadius: 99999 }}
          >
            Hide Me
          </Button>
        </a>
      </div>
    </div>
  );
};

HideMe.propTypes = {};

export default HideMe;
