import React from "react";
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
import SingIn from "./SingIn";
import { apiRequest } from "../../api";

/////////
const usersArray = [
  { id: 1, name: "Dima", email: "test@mail.ru", password: "12345" },
  { id: 2, name: "Vova", email: "mail@mail.ru", password: "56789" },
];

/////////

/////////
const EntryPage = ({ setIsAuth }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.componentHead}>
        <Container fixed>
          <Typography variant="h3">Вход в личный кабинет пациента</Typography>
        </Container>
      </Box>
      <LogIn setIsAuth={setIsAuth} />
      <SingIn setIsAuth={setIsAuth} />
    </>
  );
};

export default EntryPage;
