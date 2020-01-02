import React from 'react';
import {
  SimpleForm, TextInput, Create,
} from 'react-admin';

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="password" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Create>
);
export default UserCreate;
