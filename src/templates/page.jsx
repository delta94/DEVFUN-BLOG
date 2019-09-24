import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout } from '../components/UI';

export default ({ data }) => {
  const page = data.mdx;
  return (
    <Layout>
      <h1>{page.frontmatter.title}</h1>
      <MDXRenderer>{page.body}</MDXRenderer>
    </Layout>
  );
};
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
