import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import StyledNavbar from './style';
// import PropTypes from 'prop-types';

const Navbar = () => {
  const { title } = useSiteMetadata();
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
      </ul>
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
