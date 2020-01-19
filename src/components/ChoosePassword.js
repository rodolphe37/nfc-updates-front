import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FunctionField, TextInput } from 'react-admin';


export default function ChoosePassword({ open, handleClose }) {
  return (
    <div>

      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create your password, please enter an new password here.
          </DialogContentText>
          <TextInput
            autoFocus
            margin="dense"
            label="password"
            type="password"
            fullWidth
            source="password"
          />
          <TextInput
            autoFocus
            margin="dense"
            label="password"
            type="password"
            fullWidth
            source="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
