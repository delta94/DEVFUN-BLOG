import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  palette: {
    primary: '#f98315',
    secondary: '#5a5a5a',
    container: '#1a1a1a',
    error: '#2c3e51cc',
    success: '#fff',
    title: '#f5f5f5',
    processing: '#f5f5f5',
    warning: '#fff',
    info: '#fff',
    normal: '#fff',
  },
  fonts: {
    primary: 'Courier',
  },
};

export const customMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.palette.primary,
    },
    secondary: {
      main: theme.palette.secondary,
    },
  },
});

export default theme;
