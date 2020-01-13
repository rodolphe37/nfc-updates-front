import React, { useState } from 'react';
import { Admin, Resource } from 'react-admin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { UsersList, UsersEdit, UserCreate } from './components/users';
// import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
// import ButtonToggleTheme from './ButtonToggleTheme';
import Dashboard from './components/dashboard/Dashboard';

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const App = () => {
// We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: 'light',
    },
  });
  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        type: newPaletteType,
      },
    });
  };
  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
  // the mui theme is used in the themeProvider.
  return (
    <MuiThemeProvider theme={muiTheme}>
      {/* <FormControlLabel
        control={<Switch onChange={toggleDarkTheme} aria-label="Change Themes" />}
      /> */}
      <Admin dashboard={Dashboard} theme={muiTheme} authProvider={authProvider} dataProvider={dataProvider}>
        <Switch onChange={toggleDarkTheme} aria-label="Change Themes" />
        <Resource name="users" list={UsersList} edit={UsersEdit} create={UserCreate} icon={UserIcon} />
      </Admin>
    </MuiThemeProvider>
  );
};
// dashboard={Dashboard}
export default App;
