import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import useStyles from "./styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
///////

function ListItemLink(props) {
  const classes = useStyles();
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <>
      <ListItem button component={renderLink} disableGutters>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
