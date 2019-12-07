import React from 'react';
import PropTypes from 'prop-types';
import ScrollTop from 'components/common/ScrollTop';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import CopyRight from 'components/common/CopyRight';
import { GlobalStyle, StyledLayout } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <div className="max-w-1340 mx-auto px-20">
          <Header />
          {children}
          <Footer />
          <ScrollTop />
        </div>
      </StyledLayout>
      <CopyRight />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
