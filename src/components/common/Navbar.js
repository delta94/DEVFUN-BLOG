import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from 'hooks/useSiteMetadata';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledNavbar = styled.ul`
  ${tw`flex list-none`}
`;
StyledNavbar.Item = styled.li`
  ${tw`uppercase pr-4`}
`;
StyledNavbar.Link = styled(Link)`
  ${tw`no-underline text-green-400 hover:text-purple-600`}
`;

const useNavbar = () => {
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

const Navbar = () => {
  const { allMdx, allFile, siteTitle } = useNavbar();
  return (
    <StyledNavbar>
      <StyledNavbar.Item>
        <StyledNavbar.Link to="/">{siteTitle}</StyledNavbar.Link>
      </StyledNavbar.Item>
      {allFile.edges.map(item => {
        return (
          <StyledNavbar.Item key={item.node.id}>
            <StyledNavbar.Link to={item.node.name}>
              {item.node.name}
            </StyledNavbar.Link>
          </StyledNavbar.Item>
        );
      })}
      {allMdx.edges.map((e, index) => {
        return (
          <StyledNavbar.Item key={String(index)}>
            <StyledNavbar.Link to={e.node.fields.slug}>
              {e.node.frontmatter.title}
            </StyledNavbar.Link>
          </StyledNavbar.Item>
        );
      })}
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
