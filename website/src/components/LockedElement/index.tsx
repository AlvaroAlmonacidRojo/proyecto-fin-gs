import {
  createStyles,
  Grid,
  Paper,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";
import React, { FC } from "react";
import Icon from "../Icon";
import Translate from "../Translation";
import Typography from "../Typography";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: "20px",
      height: "100%",
      margin: "20px",
      textAlign: "center",
      backgroundColor: theme.palette.action.selected
    }
  });

type Props = WithStyles<typeof styles>;

const LockedElement: FC<Props> = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <Grid>
        <Icon type="lock" color="secondary" />
      </Grid>
      <Grid>
        <Typography weight="normal" variant="h2">
          <Translate message="components.lockedElement.title" />
        </Typography>
      </Grid>
      <Grid>
        <Typography weight="lighter" variant="h3">
          <Translate message="components.lockedElement.subtitle" />
        </Typography>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(LockedElement);
