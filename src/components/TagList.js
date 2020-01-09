import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { push } from 'react-router-redux';
import { withStyles, Drawer } from '@material-ui/core';
import {
  Datagrid,
  List,
  TextField,
  TopToolbar,
  CreateButton,
  EditButton,
} from 'react-admin';
import { Route } from 'react-router';

import TagCreate from './TagCreate';
import UsersEdit from './UsersEdit';
import UsersList from './UsersList';

const styles = {
  drawerContent: {
    width: 300,
  },
};

const TagListActions = ({ basePath }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} />
  </TopToolbar>
);

class TagList extends React.Component {
    handleClose = () => {
      this.props.push('/users');
    };

    render() {
      const { push, classes, ...props } = this.props;
      return (
        <>
          <List
            {...props}
            sort={{ field: 'name', order: 'ASC' }}
            actions={<TagListActions />}
          >
            <Datagrid>
              <TextField source="name" />
              <EditButton />
            </Datagrid>
          </List>
          <Route path="/create/:id">
            {({ match }) => (
              <Drawer
                open={!!match}
                anchor="right"
                onClose={this.handleClose}
              >
                <TagCreate
                  className={classes.drawerContent}
                  onCancel={this.handleClose}
                  {...props}
                />
              </Drawer>
            )}
          </Route>
          <Route path="/:id">
            {({ match }) => {
              const isMatch = match
                            && match.params
                            && match.params.id !== 'create';

              return (
                <Drawer
                  open={isMatch}
                  anchor="right"
                  onClose={this.handleClose}
                >
                  {isMatch ? (
                    <UsersEdit
                      className={classes.drawerContent}
                      id={isMatch ? match.params.id : null}
                      onCancel={this.handleClose}
                      {...props}
                    />
                  ) : (
                    <div className={classes.drawerContent} />
                  )}
                </Drawer>
              );
            }}
          </Route>
        </>
      );
    }
}

export default compose(
  connect(
    undefined,
    { push },
  ),
  withStyles(styles),
)(UsersList);
