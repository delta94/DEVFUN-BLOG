import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Layout } from 'components/UI';
import SEO from 'components/common/SEO';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              image
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="PROJECT" />
      <h4>
        {data.allMarkdownRemark.totalCount}
        Posts
      </h4>
      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <h3>
              {node.frontmatter.title}
              <span>{node.frontmatter.date}</span>
            </h3>
            <img src={node.frontmatter.image} alt={node.frontmatter.title} />
            <Link to={node.fields.slug}>
              <p>{node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};
