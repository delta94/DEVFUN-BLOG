import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import Layout from 'components/common/Layout';

const PateTemplate = ({ data }) => {
  const page = data.mdx;
  return (
    <Layout>
      <h1>{page.frontmatter.title}</h1>
      <MDXRenderer>{page.body}</MDXRenderer>
    </Layout>
  );
};

PateTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default PateTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
