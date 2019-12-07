import styled, { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CLASS_UTILITY } from 'utils/css';

export const StyledLayout = styled.div`
  color: #fff;
  background-color: #1a1a1a;
`;

export const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
  ${CLASS_UTILITY}
  html,
  body {
    font-size: 80%;
    line-height: 1.6;
    scroll-behavior: smooth;
    background-color: #1a1a1a !important;
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
