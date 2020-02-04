import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

class DeleteButtonWithConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      showOptions: false,
      value: '',
      responseName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    this.setState({ showDialog: true });
  };

  handleCloseClick = () => {
    this.setState({ showDialog: false });
    this.setState({ showOptions: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showDialog: false });
    const {
      dispatchCrudDelete, resource, record, basePath, redirect, undoable,
    } = this.props;
    if (undoable && this.state.value !== record.name) {
      this.setState({ showOptions: true });
      this.setState({ responseName: "You have entered the wrong name, the user hasn't been deleted." });
    } if (this.state.value === record.name) {
      this.setState({ showOptions: true });
      this.setState({ responseName: 'Ok' });
      return dispatchCrudDelete(resource, record.id, record, basePath, redirect);
    }
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { showDialog } = this.state;
    const { label = 'ra.action.delete', classes = {}, className } = this.props;
    return (
      <>
        <Dialog fullWidth open={this.state.showOptions} onClose={this.handleCloseClick}>
          <DialogTitle>Delete confirmation</DialogTitle>
          <DialogContent>
            {this.state.responseName}
          </DialogContent>
          <DialogActions>
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClick} label={label} className={classnames('ra-delete-button', classes.deleteButton, className)} key="button">
          <ActionDelete />
        </Button>
        <Dialog fullWidth open={showDialog} onClose={this.handleCloseClick} aria-label="Are you sure?">
          <DialogTitle>Are you sure you want to delete this entity?</DialogTitle>
          <DialogContent>
            <div>
              Your actions will be logged.
            </div>
          </DialogContent>
          <DialogActions>
            <form onSubmit={this.handleSubmit}>
              <Input className="Form-input_Submit" value={this.state.value} onChange={this.handleChange} />
              <Button onClick={this.handleSubmit} label={label} className={classnames('ra-delete-button', classes.deleteButton, className)} key="button" />
            </form>
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

DeleteButtonWithConfirmation.propTypes = {
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

DeleteButtonWithConfirmation.defaultProps = {
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
)(DeleteButtonWithConfirmation);
