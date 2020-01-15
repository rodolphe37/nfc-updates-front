import React from 'react';
import ModalPage from './ModalPage';
import { SimpleForm, TextInput, Edit } from 'react-admin';
import { UserTitle } from './users';

const UsersEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
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
