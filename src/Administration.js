import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { UsersList, UserCreate } from './components/users';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import PersistentDrawerRight from './components/TestSwipeable';
import App from './App'

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const Administration = (props) => (
  
  <App {...props} />
);

export default Administration;
