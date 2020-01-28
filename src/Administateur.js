import React, { useState } from 'react';
import {
  Admin, Resource, Login, fetchUtils,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { createMuiTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { UsersList, UserCreate } from './components/users';
import Dashboard from './components/dashboard/Dashboard';
import authProvider from './components/authProvider';
import PersistentDrawerRight from './components/PersistentDrawerRight';
import DeleteButtonWithConfirmation from './components/DeleteButtonWithConfirmation';
import NotFound from './components/NotFound';
import Img1 from './assets/img/secure.jpg';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL, httpClient);

function Administrateur() {
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
  const LoginPagePerso = () => <Login theme={muiTheme} backgroundImage={Img1} />;
  // the mui theme is used in the themeProvider.
  return (
    <Admin
      dashboard={Dashboard}
      loginPage={LoginPagePerso}
      theme={muiTheme}
      dataProvider={dataProvider}
      authProvider={authProvider}
      catchAll={NotFound}
    >
      <Switch
        onChange={toggleDarkTheme}
        aria-label="Change-themes"
      />
      <Resource
        remove={DeleteButtonWithConfirmation}
        name="users"
        list={UsersList}
        edit={PersistentDrawerRight}
        create={UserCreate}
        icon={UserIcon}
      />
    </Admin>
  );
}

export default Administrateur;
