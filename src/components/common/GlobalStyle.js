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
    .border-button {
      border: 1px solid ${props => props.theme.border.button};
    }
    .bg-button { 
      background-color: ${props => props.theme.background.button}
    }
    .bg-container { 
      background-color: ${props => props.theme.background.container}
    }
    
    .text-60px-51px {
      font: normal 700 60px/51px ${props => props.theme.fonts.primary};
    }
    .text-20px-23px {
      font: normal normal 20px/23px ${props => props.theme.fonts.primary};
    }
    .text-400-25px-28px {
      font: normal 400 25px/28px ${props => props.theme.fonts.primary};
    }
    .text-700-55px-63px\\.25px {
      font: normal normal 55px/63.25px ${props => props.theme.fonts.primary};
    }
    .text-700-60px-51px {
      font: normal 700 60px/51px ${props => props.theme.fonts.primary};
    }

  }
`;
