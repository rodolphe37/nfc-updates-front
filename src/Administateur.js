import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
// import PersistentDrawerRight from './components/PersistentDrawerRight';
import TagEdit from './components/TagEdit';
import TagList from './components/TagList';
// import UsersList from './components/UsersList';
// import UserCreate from './components/UserCreate';
import TagCreate from './components/TagCreate';


const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const Administrateur = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      list={TagList}
      edit={TagEdit}
      create={TagCreate}
      icon={UserIcon}
    />
  </Admin>
);

export default Administrateur;
