import React from 'react';
import PropTypes from 'prop-types';
import ScrollTop from 'components/common/ScrollTop';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import CopyRight from 'components/common/CopyRight';
import styled, { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CLASS_UTILITY } from 'utils/css';

const StyledLayout = styled.div`
  color: #5a5a5a;
  background-color: #1a1a1a;
`;

const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
  ${CLASS_UTILITY}
  html,
  body {
    font-size: 16px;
    line-height: 1.6;
    scroll-behavior: smooth;
    background-color: #1a1a1a !important;
    .text-primary {
      color: #f98315;
    }
    .text-secondary {
      color: #5a5a5a;
    }
  }
`;

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
