import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List, SimpleList, Datagrid,
  TextField, EditButton, EmailField, Pagination,
} from 'react-admin';
import UserFilter from './UserFilter';

const UsersPagination = (props) => (
  <Pagination
    rowsPerPageOptions={[5, 10, 25, 50, 100]}
    {...props}
  />
);

const UsersList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={<UserFilter />} {...props} pagination={<UsersPagination />}>
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
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="company" />
            <EditButton />
          </Datagrid>
        )}
    </List>
  );
};
export default UsersList;
