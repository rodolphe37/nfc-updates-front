import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { UsersList, UsersEdit, UserCreate } from './components/users';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
//import dataProvider from './components/dataProvider';
import { UserFilter} from './components/users';

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} filters={UserFilter}>
    <Resource name="users" list={UsersList} edit={UsersEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);

export default App;
