import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { apiRequest } from "../../api";

//////
const SingInfo = ({ setIsAuth }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [valid, setValid] = useState(false);

  //очистка формы после всех обработок
  function handleFormClear() {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setName("");
    setSurname("");
    setPatronymic("");
  }

  //проверка емейла на правильность
  function handleValidationEmail(event) {
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    setEmail(event.target.value);
    setValid(regExp.test(event.target.value));
    console.log("test", regExp.test(event.target.value));
  }
  //проверка ФИО на правильность
  function handleValidationFIO(event) {
    const regExp = /^[А-Яа-яA-Za-z]*$/gi;

    if (event.target.id === "surname" && regExp.test(event.target.value)) {
      setSurname(event.target.value);
    }
    if (event.target.id === "name" && regExp.test(event.target.value)) {
      setName(event.target.value);
    }
    if (event.target.id === "patronymic" && regExp.test(event.target.value)) {
      setPatronymic(event.target.value);
    }
  }

  //отправка данных для проверки на сервере
  async function handleForm(event) {
    event.preventDefault();

    if (valid && password === repeatPassword) {
      let singInfoData = {
        email,
        password,
        name,
        surname,
        patronymic,
      };
      console.log("sign in data ", singInfoData);
      try {
        apiRequest("patient-register", "POST", singInfoData).then((data) =>
          setIsAuth(data.id)
        );
        handleFormClear();
      } catch (error) {
        console.log("error ", error.message);
      }
    } else {
      alert("Проверьте правильность написания email и совпадение");
    }
    setValid(false);
  }
  
  return (
    <>
      <Box className={classes.logInContainer}>
        <Container fixed>
          <Typography variant="h3" className={classes.logInTitle}>
            Личная информация
          </Typography>
                
          <form className={classes.logInFrom} onSubmit={handleForm}>
            <Grid container className={classes.logInGridContainer}>
              <Grid item className={classes.logInGridItemInput}>
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  placeholder="Email*"
                  type="email"
                  error={!valid && email !== ""}
                  helperText={
                    !valid && email !== "" ? "email введен некорректно" : ""
                  }
                  value={email}
                  onChange={(e) => handleValidationEmail(e)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="surname"
                  type="text"
                  placeholder="Фамилия*"
                  onChange={(e) => handleValidationFIO(e)}
                  value={surname}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="password"
                  placeholder="Пароль*"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="name"
                  placeholder="Имя*"
                  type="text"
                  onChange={(e) => handleValidationFIO(e)}
                  value={name}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  className={classes.logInInput}
                  variant="outlined"
                  id="repeat-password"
                  placeholder="Повторите пароль*"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="patronymic"
                  placeholder="Отчество*"
                  type="text"
                  onChange={(e) => handleValidationFIO(e)}
                  value={patronymic}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
              </Grid>
              <Grid item className={classes.logInGridItemButtonTypographyClone}>
                  <Typography>
                     Хотите изменить пароль? 
                  </Typography>
                </Grid>
                <Grid item container className={classes.logInGridItemButton}>
                <Grid item>
                  <Button type="submit" className={classes.logInButton}>
                    ОБНОВИТЬ ИНФОРМАЦИЮ
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default SingInfo;
