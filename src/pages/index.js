import React from 'react';
import SEO from 'components/common/SEO';
import Layout from 'components/common/Layout';
import { Link } from 'gatsby';
import HideMe from 'components/Home/HideMe';

export default () => {
  return (
    <Layout>
      <SEO title="Front-end Web Developer" />
      <div className="flex justify-between my-10">
        <div className="my-10">
          <h2 className="text-400-25px-28px text-title"> HELLO, I&apos;M</h2>
          <h1 className="text-700-55px-63.25px my-8"> TRAN THAI SON </h1>
          <p className="text-16px-18.4px text-title"> A Fullstack Developer </p>
          <Link to="/project">
            <button
              type="button"
              className="bg-button border-button r-full cursor-pointer mt-10 px-5 py-2"
            >
              VIEW MY WORK
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://avatars1.githubusercontent.com/u/43759215?s=460&v=4"
            alt="github"
          />
        </div>
      </div>
      <div className="my-12">
        <HideMe />
      </div>
    </Layout>
  );
};
