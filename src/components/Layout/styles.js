import styled, { createGlobalStyle } from 'styled-components';

export const StyledLayout = styled.div`
  background: red;
`;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 80%;
    @media (min-width: 576px) {
      font-size: 80%;
    }
    @media (min-width: 768px) {
      font-size: 80%;
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
