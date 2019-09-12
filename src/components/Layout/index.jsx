import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, StyledLayout } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        {children}
        <Footer />
      </StyledLayout>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
