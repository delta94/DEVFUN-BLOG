import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, StyledLayout } from './styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
