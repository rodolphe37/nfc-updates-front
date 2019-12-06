import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  Filter, List, SimpleList, Datagrid,
  TextField, EditButton, EmailField,
  SimpleForm, TextInput, ReferenceInput,
  SelectInput, Create, Edit, 
} from 'react-admin';

const UserTitle = ({ record }) => (
  <span>
    {' '}
    {record ? `"${record.name}"` : ''}
  </span>
);

export const UsersList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
  <List filters={<UserFilter />} {...props}>
     {isSmall ? (
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.email}
          tertiaryText={record => record.company}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="company" />
          <EditButton />
        </Datagrid>
          )}
  </List>
    );
};

export const UsersEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="email" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Create>
);

export const UserFilter = (props) => (
  <Filter {...props}>
     <TextInput label="Search" source="Users" alwaysOn  /> 
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
