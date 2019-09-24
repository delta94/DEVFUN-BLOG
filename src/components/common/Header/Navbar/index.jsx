import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import StyledNavbar from './style';
// import PropTypes from 'prop-types';

const Navbar = () => {
  const { title } = useSiteMetadata();
  const { allMdx } = useStaticQuery(graphql`
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
    }
  `);
  return (
    <StyledNavbar>
      <ul className="navbar">
        <li className="navbarItem">
          <Link to="/">{title}</Link>
        </li>
        <li className="navbarItem">
          <Link to="/blog/">Blog</Link>
        </li>
        <li className="navbarItem">
          <Link to="/project/">Project</Link>
        </li>
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
