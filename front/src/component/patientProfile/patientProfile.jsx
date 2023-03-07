import React, { useContext } from "react";
import { useStyles } from "../medicalHistory/styleMedical";
import { DataContext } from "../../DataContext";
import SingInfo from "../entryInLC/SingInfo"



export const PatientProfile = () => {
  const classes = useStyles();
  const { doctorArray } = useContext(DataContext);

   return (
    <>
      <SingInfo />
    </>
  );
};
