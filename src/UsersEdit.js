import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  Filter, List, SimpleList, Datagrid,
  TextField, EditButton, EmailField,
  SimpleForm, TextInput, ReferenceInput,
  SelectInput, Create, Edit, Pagination,
} from 'react-admin';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import {
  makeStyles, useTheme, Theme, createStyles,
} from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function UsersEdit(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const UserTitle = ({ record }) => (
    <span>
      {' '}
      {record ? `"${record.name}"` : ''}
    </span>
  );
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="email" />
          <TextInput source="phone" />
          <TextInput source="password" />
          <TextInput multiline source="company" />
        </SimpleForm>
      </Edit>
    </Drawer>
  );
}

export default UsersEdit;
