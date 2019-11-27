import styled, { createGlobalStyle } from 'styled-components';
import { CSS_RESET } from 'utils/css';

export const StyledLayout = styled.div`
  background: #100e17;
  color: #fff;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 60px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
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
