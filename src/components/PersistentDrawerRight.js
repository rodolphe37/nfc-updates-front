import React from 'react';
import clsx from 'clsx';
import { Resource, useRedirect } from 'react-admin';
import {
  makeStyles, createStyles, useTheme,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Button from '@material-ui/core/Button';
import { UsersList } from './users';
import UsersEdit from './UsersEdit';
import DeleteButtonWithConfirmation from './DeleteButtonWithConfirmation';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
  },

  title: {
    flexGrow: 1,
  },
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

export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const theme = useTheme();
  const redirect = useRedirect();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main
        className={clsx(classes.content,
          classes.contentShift)}
      >
        <Resource
          name="users"
          list={UsersList}
        />
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        <IconButton onClick={() => redirect('/users')}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        {/* <DeleteButtonWithConfirmation /> */}
        <UsersEdit {...props} />
      </Drawer>
    </div>
  );
}
