import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from 'hooks/useSiteMetadata';

export const useNavbar = () => {
  const { siteTitle } = useSiteMetadata();
  const { allMdx, allFile } = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { template: { eq: "page" } } }) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      allFile(
        filter: {
          extension: { regex: "/js/" }
          name: { nin: ["index", "404"] }
        }
      ) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);
  return { allMdx, allFile, siteTitle };
};
