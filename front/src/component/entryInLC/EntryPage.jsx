import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import LogIn from "./LogIn";
import SingInfo from "./SingInfo";
import { apiRequest } from "../../api";
import ModalWindow from "../commonComponents/modalWindow/ModalWindow";

/////////

/////////
const EntryPage = ({ setIsAuth }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleOpen = (value) => {
    setModalMessage(value);
    setOpen(true);
  };

  const handleClose = () => {
    setModalMessage("");
    setOpen(false);
  };

  return (
    <>
      <Box className={classes.componentHead}>
        <Container fixed>
          <Typography variant="h3">Вход в личный кабинет пациента</Typography>
        </Container>
      </Box>
      <LogIn setIsAuth={setIsAuth} handleOpen={handleOpen} />
      <SingInfo setIsAuth={setIsAuth} handleOpen={handleOpen} />
      <ModalWindow
        open={open}
        onClose={handleClose}
        modalMessage={modalMessage}
      />
    </>
  );
};

export default EntryPage;
