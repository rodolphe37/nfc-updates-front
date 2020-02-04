import React, { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import ChoosePassword from './PasswordSelection';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function ModalPage({ theme }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Create Password
      </Button>
      <Modal
        theme={muiTheme}
        aria-labelledby="title"
        aria-describedby="description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ChoosePassword open={open} handleClose={handleClose} />
        </Fade>
      </Modal>
    </div>
  );
}
