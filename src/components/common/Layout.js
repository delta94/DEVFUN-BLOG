import React from 'react';
import PropTypes from 'prop-types';
import ScrollTop from 'components/common/ScrollTop';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import CopyRight from 'components/common/CopyRight';
import { StyledLayout, GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="bg-container text-secondary">
          <div className="max-w-1340 mx-auto px-20">
            <div className="mt-30">
              <Header />
            </div>
            {children}
            <Footer />
            <ScrollTop />
          </div>
        </div>
        <CopyRight />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
