import { createGlobalStyle } from 'styled-components';
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
    .primary-color {
      color: ${(props) => props.theme.palette.primary};
    }
    .secondary-color {
      color: ${(props) => props.theme.palette.secondary};
    }
    .normal-color {
      color: ${(props) => props.theme.palette.normal};
    }
    .title-color {
      color: ${(props) => props.theme.palette.title};
    }
    .hover\\:primary-color {
      &:hover {
        color: ${(props) => props.theme.palette.primary};
      }
    }
    .hover\\:secondary-color {
      &:hover {
        color: ${(props) => props.theme.palette.secondary};
      }
    }
    .bg-primary { 
      background-color: ${(props) => props.theme.palette.primary}
    }
    .bg-container { 
      background-color: ${(props) => props.theme.palette.container}
    }
    .text-60px-51px {
      font: normal 700 60px/51px ${(props) => props.theme.fonts.primary};
    }
    .text-20px-23px {
      font: normal normal 20px/23px ${(props) => props.theme.fonts.primary};
    }
    .text-400-25px-28px {
      font: normal 400 25px/28px ${(props) => props.theme.fonts.primary};
    }
    .text-600-40px-30px {
      font: normal 300 40px/30px ${(props) => props.theme.fonts.primary};
    }
    .text-700-55px-63px\\.25px {
      font: normal normal 55px/63.25px ${(props) => props.theme.fonts.primary};
    }
    .text-700-60px-51px {
      font: normal 700 60px/51px ${(props) => props.theme.fonts.primary};
    }

  }
`;
