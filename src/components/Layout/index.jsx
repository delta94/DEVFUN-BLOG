import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { GlobalStyle, StyledLayout } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
  children: PropTypes.node.isRequired
};

export default Layout;
