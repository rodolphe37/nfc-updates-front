import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { UsersList, UserCreate } from './components/users';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import PersistentDrawerRight from './components/PersistentDrawerRight';

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const Administrateur = (props) => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      list={UsersList}
      edit={PersistentDrawerRight}
      create={UserCreate}
      icon={UserIcon}
    />
  </Admin>
);

export default Administrateur;
