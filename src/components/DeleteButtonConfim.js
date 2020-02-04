import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionDelete from '@material-ui/icons/Delete';
import classnames from 'classnames';
import { translate, crudDelete, startUndoable } from 'ra-core';
import IconCancel from '@material-ui/icons/Cancel';
import {
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import { Button } from 'react-admin';

const styles = (theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, 0.12),
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
});


const DeleteButtonConfirm = (props) => {
  const [showDialog, setShowDialog, showOptions, setShowOptions] = React.useState(false);
  const [value, setValue, responseName, setResponseName] = React.useState('');
  const { label = 'ra.action.delete', classes = {}, className } = props;


  const handleClick = () => {
    setShowDialog(!false);
  };

  const handleCloseClick = () => ((
    setShowDialog(!true),
    setShowOptions(!true)
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDialog(!true);
    const {
      dispatchCrudDelete, resource, record, basePath, redirect, undoable,
    } = props;
    if (undoable && value !== record.name) {
      setShowOptions(true);
      setResponseName("You have entered the wrong name, the user hasn't been deleted.");
    } if (value === record.name) {
      setShowOptions(true);
      setResponseName('Ok');
      return dispatchCrudDelete(resource, record.id, record, basePath, redirect);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Dialog fullWidth open={showOptions} onClose={handleCloseClick}>
        <DialogTitle>Delete confirmation</DialogTitle>
        <DialogContent>
          {setResponseName}
        </DialogContent>
        <DialogActions>
          <Button label="ra.action.cancel" onClick={handleCloseClick}>
            <IconCancel />
          </Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleClick} label={label} className={classnames('ra-delete-button', classes.deleteButton, className)} key="button">
        <ActionDelete />
      </Button>
      <Dialog fullWidth open={showDialog} onClose={handleCloseClick} aria-label="Are you sure?">
        <DialogTitle>Are you sure you want to delete this entity?</DialogTitle>
        <DialogContent>
          <div>
              Your actions will be logged.
          </div>
        </DialogContent>
        <DialogActions>
          <form onSubmit={handleSubmit}>
            <Input className="Form-input_Submit" value={value} onChange={handleChange} />
            <Button onClick={handleSubmit} label={label} className={classnames('ra-delete-button', classes.deleteButton, className)} key="button" />
          </form>
          <Button label="ra.action.cancel" onClick={handleCloseClick}>
            <IconCancel />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


DeleteButtonConfirm.propTypes = {
  // basePath: PropTypes.string,
  // classes: PropTypes.object,
  // className: PropTypes.string,
  dispatchCrudDelete: PropTypes.func.isRequired,
  // label: PropTypes.string,
  // record: PropTypes.object,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
  resource: PropTypes.string.isRequired,
  // startUndoable: PropTypes.func,
  // translate: PropTypes.func,
  undoable: PropTypes.bool,
};

DeleteButtonConfirm.defaultProps = {
  redirect: 'list',
  undoable: true,
};

export default compose(
  connect(
    null,
    { startUndoable, dispatchCrudDelete: crudDelete },
  ),
  translate,
  withStyles(styles),
)(DeleteButtonConfirm);
