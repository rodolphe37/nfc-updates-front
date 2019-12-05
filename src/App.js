import React, { Component } from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import { UserList } from './users';
import { EditList, UsersEdit, UserCreate } from './EditUsers';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider("http://localhost:5000");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={EditList} edit={UsersEdit} create={UserCreate} icon={UserIcon}/>
      </Admin>
    );
  }
}
export default App;
