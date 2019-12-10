import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  Filter, List, SimpleList, Datagrid,
  TextField, EditButton, EmailField,
  SimpleForm, TextInput, ReferenceInput,
  SelectInput, Create, Edit, Pagination,
} from 'react-admin';

const UsersPagination = props => <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100]} {...props} />;

const UserTitle = ({ record }) => (
  <span>
    {' '}
    {record ? `"${record.name}"` : ''}
  </span>
);

export const UsersList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
  <List filters={<UserFilter />} {...props} pagination={<UsersPagination />}>
     {isSmall
        ? (
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
            <TextField source="phone" />
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
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Create>
);

export const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="users" alwaysOn  /> 
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
    <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
