import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  TextInput, SimpleForm, required, Toolbar, useRedirect,
} from 'react-admin';
import IconCancel from '@material-ui/icons/Cancel';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme2 = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#f50057',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

export default function ChoosePassword({
  onCancel, open, theme, handleClose,
}) {
  const redirect = useRedirect();

  const PasswordEditToolbar = ({ ...props }) => (
    <Toolbar basepath="true" {...props}>
      <DialogActions saving="true">
        <ThemeProvider theme={theme2}>
          <Button onClick={handleClose} color="primary" required emptyValue={null}>
      Save Password
          </Button>
        </ThemeProvider>
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
