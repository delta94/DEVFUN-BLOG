import React from 'react';
import SEO from 'components/common/SEO';
import Layout from 'components/common/Layout';
import { Link } from 'gatsby';
import HideMe from 'components/Home/HideMe';
import Button from '@material-ui/core/Button';

export default () => {
  return (
    <Layout>
      <SEO title="Front-end Web Developer" />
      <div className="flex justify-between my-10">
        <div className="my-10">
          <h2 className="text-400-25px-28px title-color"> HELLO, I&apos;M</h2>
          <h1 className="text-700-55px-63.25px my-8"> TRAN THAI SON </h1>
          <p className="text-16px-18.4px title-color">A Fullstack Developer</p>
          <Link to="/project" className="no-underline">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginTop: 20, borderRadius: 99999 }}
            >
              VIEW MY WORK
            </Button>
          </Link>
        </div>
        <div>
          <img
            src="https://avatars1.githubusercontent.com/u/43759215?s=460&v=4"
            alt="github"
          />
        </div>
      </div>
      <div style={{ margin: '12px 0' }}>
        <HideMe />
      </div>
    </Layout>
  );
};
