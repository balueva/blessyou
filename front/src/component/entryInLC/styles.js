import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ///entry page
  componentHead: {
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    minHeight: "200px",
    "& h3": {
      fontWeight: 700,
      fontSize: "50px",
      lineHeight: "80px",
      color: "#FFFFFF",
      display: "flex",
      minHeight: "200px",
      alignItems: "center",
    },
  },

  ///log in page
  logInContainer: {
    paddingTop: "100px",
    background: "#F2F7FA",
  },

  logInTitle: {
    fontSize: "36px",
    lineHeight: "30px",
    color: "#4493B9",
  },

  logInFrom: {
    marginTop: "35px",
  },

  logInGridContainer: {
    flexDirection: "column",
  },
  logInGridItemInput: {
    display: "flex",
    gap: "64px",
    flexWrap: "wrap",
  },
  logInGridItemButton: {
    margin: "50px 0",
    gap: " 47px",
  },
  logInGridItemButtonTypography: {
    alignSelf: "flex-end",
    color: "#676767",
    opacity: "0.8",
    fontSize: "16px",
    lineHeight: "30px",
  },

  logInGridItemButtonTypographyClone: {
    alignSelf: "flex",
    color: "#676767",
    opacity: "0.8",
    fontSize: "16px",
    lineHeight: "30px",
    margin: "50px 0",
  },

  logInInput: {
    width: "452px",
    // height: "64px",
    background: "#FFFFFF",
    boxShadow: "5px 10px 50px rgba(16, 112, 177, 0.2)",
    borderRadius: "10px",
  },

  logInButton: {
    width: "290px",
    height: "60px",
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    boxShadow: "0px 15px 10px rgba(125, 214, 246, 0.13)",
    borderRadius: "0px 30px",
    fontWeight: 600,
    fontSize: "16px",
    ineHeight: "24px",
    color: "#FFFFFF",
  },

  ///sing in page

  ///класс для убирания border в инпутах
  noBorder: {
    border: "none",
  },
}));

export default useStyles;
