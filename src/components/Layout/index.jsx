import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { GlobalStyle, StyledLayout } from './styles';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout>
        <Link to="/">
          <h3>{title}</h3>
        </Link>
        <Link to="/about/">About</Link>
        {children}
      </StyledLayout>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
