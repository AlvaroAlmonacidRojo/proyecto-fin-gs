import {
  createStyles,
  Paper,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";
import React, { FC } from "react";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: "20px",
      height: "100%",
      margin: "20px"
    }
  });

type Props = WithStyles<typeof styles>;

const AdministrationComponent: FC<Props> = ({ classes }) => {
  const administration = "Administracion";
  return <Paper className={classes.paper}>{administration}</Paper>;
};

export default withStyles(styles)(AdministrationComponent);
