import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Administrateur from './Administateur';

const App = () => {
  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: 'light',
    },
  });
  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
  // the mui theme is used in the themeProvider.
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Administrateur />
    </MuiThemeProvider>
  );
};


export default App;
