import { AppBar, Container } from "@material-ui/core";
import React from "react";
import HeaderContent from "./headerContent";
import useStyles from "./styles";

const Header = ({ isAuth }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} color="inherit">
      <Container fixed>
        <HeaderContent isAuth={isAuth} />
      </Container>
    </AppBar>
  );
};

export default Header;
