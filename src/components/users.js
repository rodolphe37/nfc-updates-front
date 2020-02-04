import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List, SimpleList, Datagrid,
  TextField, EditButton,
  SimpleForm, TextInput, Create, Pagination, Confirm, DeleteButton,
} from 'react-admin';
// import DeleteButtonConfirm from './DeleteButtonConfim';


const UsersPagination = (props) => (
  <Pagination
    rowsPerPageOptions={[5, 10, 25, 50, 100]}
    {...props}
  />
);

export const UserTitle = ({ record }) => (
  <span>
    {' '}
    {record ? `"${record.name}"` : ''}
  </span>
);

export const UsersList = (props, name) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List
      {...props}
      pagination={<UsersPagination />}
      delete={(
        <Confirm
          title="Delete Item"
          content="Are you sure you want to delete this item ?"
          confirm="Yes"
          confirmColor="primary"
          cancel="Cancel"
        />
      )}
    >
      {isSmall
        ? (
          <SimpleList
            primaryText={(record) => record.name}
            secondaryText={(record) => record.company}
            tertiaryText={(record) => record.phone}
          />
        ) : (
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="company" />
            <EditButton style={{ color: 'grey' }} />
            <DeleteButton undoable={false} />
          </Datagrid>
        )}
    </List>
  );
};

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput type="password" label="password" source="password" />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Create>
);
