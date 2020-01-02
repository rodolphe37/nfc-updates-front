import React from 'react';
import {
  SaveButton,
  Toolbar,
  translate,
} from 'react-admin';
import Button from '@material-ui/core/Button';
import UsersEdit from './UsersEdit';

const TagEditToolbar = translate(({ onCancel, ...props }) => (
  <Toolbar {...props}>
    <SaveButton />
    <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
  </Toolbar>
));

const TagEdit = ({ onCancel, ...props }) => (
  <UsersEdit toolbar={<TagEditToolbar onCancel={onCancel} />} {...props} />


);

export default TagEdit;
