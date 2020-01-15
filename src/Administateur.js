import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { UsersList, UserCreate, UserFilter } from './components/users';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import PersistentDrawerRight from './components/PersistentDrawerRight';
import DeleteButtonWithConfirmation from './components/DeleteButtonWithConfirmation';
import NotFound from './components/NotFound';



// import MyLoginPage from './MyLoginPage';
// import MyLogoutButton from './MyLogoutButton';


const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const Administrateur = (props) => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    catchAll={NotFound}
    >
    <Resource
      // loginPage={MyLoginPage}
      // logoutButton={MyLogoutButton}
      delete={DeleteButtonWithConfirmation}
      name="users"
      filter={UserFilter}
      list={UsersList}
      edit={PersistentDrawerRight}
      create={UserCreate}
      icon={UserIcon}
    />
  </Admin>
);

export default Administrateur;
