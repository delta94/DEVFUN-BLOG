import { useStaticQuery, graphql } from 'gatsby';

const useFetchAllBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" } } }
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
  return data;
};

export default useFetchAllBlog;
