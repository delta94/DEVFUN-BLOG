import styled, { createGlobalStyle } from 'styled-components';

export const StyledLayout = styled.div`
  background: #15202c;
  color: #fff;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  embed,
  iframe,
  img,
  object,
  video {
    display: block;
    max-width: 100%;
  }

  table {
    table-layout: fixed;
    width: 100%;
  }

  [hidden] {
    display: none;
  }
  html,
  body {
    font-size: 80%;
    line-height: 1.6;
    @media (min-width: 576px) {
      font-size: 90%;
    }
    @media (min-width: 768px) {
      font-size: 90%;
    }
    @media (min-width: 992px) {
      font-size: 90%;
    }
    @media (min-width: 1200px) {
      font-size: 100%;
    }
    @media (min-width: 1600px) {
      font-size: 133.33333%;
    }
  }
`;
