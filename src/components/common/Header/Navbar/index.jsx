import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import StyledNavbar from './style';
// import PropTypes from 'prop-types';

const Navbar = () => {
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
  return (
    <StyledNavbar>
      <ul className="navbar">
        <li className="navbarItem">
          <Link to="/">{siteTitle}</Link>
        </li>
        {allFile.edges.map(item => {
          return (
            <li className="navbarItem" key={item.node.id}>
              <Link to={item.node.name}>{item.node.name}</Link>
            </li>
          );
        })}
        {allMdx.edges.map((e, index) => {
          return (
            <li className="navbarItem" key={String(index)}>
              <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
