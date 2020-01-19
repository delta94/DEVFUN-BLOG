import styled, { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CLASS_UTILITY } from 'utils/css';

export const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
  ${CLASS_UTILITY}
  html,
  body {
    font-size: 16px;
    line-height: 1.6;
    scroll-behavior: smooth;
    background-color: #1a1a1a !important;
    .text-primary {
      color: ${props => props.theme.text.primary};
    }
    .text-title {
      color: ${props => props.theme.text.title};
    }
    .text-secondary {
      color: ${props => props.theme.text.secondary};
    }
    .bg-container { 
      background-color: ${props => props.theme.background.container}
    }
    .text-400-25-28 {
      font: normal 400 25px/2.8 'Inter';
    }
  }
`;
