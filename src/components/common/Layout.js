import React from 'react';
import PropTypes from 'prop-types';
import ScrollTop from 'components/common/ScrollTop';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import CopyRight from 'components/common/CopyRight';
import { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import theme, { customMuiTheme } from 'theme/theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle } from './GlobalStyle';

const Layout = ({ children }) => {
  return (
    <NoSsr>
      <MuiThemeProvider theme={customMuiTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="bg-container secondary-color">
            <div className="max-w-6xl mx-auto" style={{ padding: '0 20px' }}>
              <div style={{ marginTop: 20 }}>
                <Header />
              </div>
              <div style={{ margin: '30px 0' }}>{children}</div>
              <div style={{ marginBottom: 30 }}>
                <Footer />
              </div>
              <ScrollTop />
            </div>
          </div>
          <CopyRight />
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
