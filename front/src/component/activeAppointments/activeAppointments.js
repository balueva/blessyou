import { Box, Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
// import { useStyles } from "../medicalHistory/styleMedical";
import { MedicalCard, useStyles } from "../medicalHistory/";
import { DataContext } from "../../DataContext";

export const ActiveAppointments = () => {
  const classes = useStyles();
  const { doctorArray } = useContext(DataContext);

  // console.log("doctorArray", doctorArray);

  return (
    <>
      <Container fixed>
        <Box className={classes.medicalTitlleBox}>
          <Typography className={classes.medicalTitlle}>
            Дата и специалист
          </Typography>
        </Box>
        <MedicalCard props={doctorArray[5]} changeRenderButtonCard="true" />
        <MedicalCard props={doctorArray[7]} changeRenderButtonCard="true" />
      </Container>
      <Box style={{ minHeight: "300px" }}></Box>
    </>
  );
};
