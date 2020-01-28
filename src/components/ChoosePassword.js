import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  TextInput, SimpleForm, required, SaveButton, Toolbar, useRedirect,
} from 'react-admin';
import IconCancel from '@material-ui/icons/Cancel';
import { ThemeProvider } from '@material-ui/core/styles';


export default function ChoosePassword({ onCancel, open, theme }) {
  const redirect = useRedirect();

  const PasswordEditToolbar = ({ ...props }) => (
    <Toolbar basepath="true" {...props}>
      <DialogActions saving="true">
        <SaveButton {...props} handlesubmitwithredirect />
      </DialogActions>
      <DialogActions>
        <Button label="ra.action.cancel" onClick={() => redirect('/users')}>
          <IconCancel />
Cancel
        </Button>
      </DialogActions>
    </Toolbar>
  );
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
            To create your password, please enter an new password here.
            </DialogContentText>
            <SimpleForm toolbar={<PasswordEditToolbar onCancel={onCancel} pristine="true" invalid="false" />}>
              <TextInput
                autoComplete="off"
                autoFocus
                margin="dense"
                label="password"
                type="password"
                fullWidth
                source="password"
                validate={[required()]}
              />
            </SimpleForm>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
