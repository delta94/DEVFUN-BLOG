import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from 'components/common/SEO';
import Layout from 'components/common/Layout';
import useFetchAllBlog from 'hooks/useFetchAllBlog';

const Blog = () => {
  const data = useFetchAllBlog();
  return (
    <Layout>
      <SEO title="BLOG" />
      <h4>
        {data.allMarkdownRemark.totalCount}
        Posts
      </h4>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <h3>
              {node.frontmatter.title}
              <span>{node.frontmatter.date}</span>
            </h3>
            <img src={node.frontmatter.image} alt={node.frontmatter.title} />
            <Link className="no-underline" to={node.fields.slug}>
              <p>{node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
