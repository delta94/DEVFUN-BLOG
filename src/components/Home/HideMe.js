/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const HideMe = () => {
  return (
    <div className="flex flex-col center">
      <h2 className="text-700-60px-51px text-title">Do you want to hire me?</h2>
      <p className="mt-5 text-20px-23px text-title">
        If so, you can take a look at my CV and send me an e-mail.
      </p>
      <div className="flex justify-between w-1/3 my-8">
        <a
          href="https://drive.google.com/file/d/1cZg7yhQcurpBJ4NlMmFHYhgZ5_UtKteq/view"
          target="_blank"
        >
          <button
            type="button"
            className="py-4 px-12 r-full cursor-pointer text-primary"
          >
            RESUME
          </button>
        </a>
        <a href="https://drive.google.com/file/d/1cZg7yhQcurpBJ4NlMmFHYhgZ5_UtKteq/view">
          <button
            type="button"
            className="py-4 px-12 r-full cursor-pointer bg-transparent text-title"
          >
            HIRE ME
          </button>
        </a>
      </div>
    </div>
  );
};

HideMe.propTypes = {};

export default HideMe;
