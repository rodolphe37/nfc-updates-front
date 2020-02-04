import React from 'react';
import {
  SimpleForm, TextInput, Edit, SaveButton, Toolbar,
} from 'react-admin';
import ModalPage from './ModalPage';
import { UserTitle } from './users';
import DeleteButtonConfirm from './DeleteButtonConfim';

const UsersEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteButtonConfirm />
  </Toolbar>
);

const UsersEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm toolbar={<UsersEditToolbar />}>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <ModalPage
        label="Choose your password"
        source="password"
        disableEnforceFocus
      />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Edit>
);

export default UsersEdit;
