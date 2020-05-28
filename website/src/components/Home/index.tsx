import {
  Avatar,
  createStyles,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";
import moment from "moment";
import React, { FC } from "react";
import { Fingerprint } from "../../../../types/build/fingerprint";
import DatePickerComponent from "../DatePicker";
import Icon from "../Icon";
import Translate from "../Translation";
import Typography from "../Typography";
import { mockList } from "./mockList";

const styles = (theme: Theme) =>
  createStyles({
    hours: {
      marginTop: "50px",
      marginBottom: "50px",
      textAlign: "center"
    },
    paper: {
      padding: "20px",
      height: "100%",
      margin: "20px"
    },
    avatar: {
      margin: "10px",
      height: "100px",
      width: "100px",
      fontSize: "50px",
      backgroundColor: theme.palette.secondary.main
    },
    details: {
      marginBottom: "10px"
    },
    hoursItem: {
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: "20px",
      backgroundColor: theme.palette.action.selected
    }
  });

interface ComponentProps {
  fingerprint: Fingerprint | null;
  handleDateChange: (date: string) => void;
  date: string;
}

type Props = ComponentProps & WithStyles<typeof styles>;

const HomeComponent: FC<Props> = ({
  classes,
  fingerprint,
  handleDateChange,
  date
}) => {
  const avatarLetter = "A";
  const details = {
    firstName: "Alvaro Almonacid Rojo",
    lastName: "Almonacid Rojo",
    email: "alvaro.almonacid.rojo@wanadoo.es",
    description: "Frontend developer",
    proyectName: "Proyecto fin GS"
  };
  const handleClick = (date: Date) =>
    handleDateChange(moment(date).format("YYYY-MM-DD"));
  const entry = fingerprint
    ? moment(fingerprint.first_fingerprint).format("HH:mm:ss")
    : "";
  const exit = fingerprint
    ? moment(fingerprint.last_fingerprint).format("HH:mm:ss")
    : "";

  const duration = !(entry === "" && exit === "")
    ? moment.duration(
        moment(fingerprint!.last_fingerprint).diff(
          moment(fingerprint!.first_fingerprint)
        )
      )
    : "";
  const time = duration === "" ? duration : `${duration.hours()}:${duration.minutes()}`;
  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.details} alignItems="center">
        <Grid item xs={12} md={4} lg={2}>
          <Avatar className={classes.avatar}>{avatarLetter}</Avatar>
        </Grid>
        <Grid item xs={12} md={8} lg={10}>
          <Typography weight="bold" variant="h3">
            {details.firstName}
          </Typography>
          <Typography weight="lighter" variant="body1">
            {details.email}
          </Typography>
          <Typography weight="lighter" variant="body1">
            {details.description}
          </Typography>
          <Typography weight="lighter" variant="body1">
            {details.proyectName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs={6} lg={11}>
          <DatePickerComponent click={handleClick} date={new Date(date)} />
        </Grid>
        <Grid item xs={6} lg={1}>
          <Icon type="replay" color="secondary" fontSize="large" />
        </Grid>
      </Grid>
      <Grid spacing={0} container className={classes.hours}>
        <Grid item xs={12} md={4} lg={4} className={classes.hoursItem}>
          <Typography weight="normal" variant="h2">
            <Translate message="components.home.entry.label" />
          </Typography>
          <Typography weight="lighter" variant="h3">
            {entry ? entry : "--:--"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.hoursItem}>
          <Typography weight="normal" variant="h2">
            <Translate message="components.home.exit.label" />
          </Typography>
          <Typography weight="lighter" variant="h3">
            {exit ? exit : "--:--"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.hoursItem}>
          <Typography weight="normal" variant="h2">
            <Translate message="components.home.time.label" />
          </Typography>
          <Typography weight="lighter" variant="h3">
            {time ? time : "--:--"}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignContent="center">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dia</TableCell>
              <TableCell>Entrada</TableCell>
              <TableCell>Salida</TableCell>
              <TableCell>Tiempo</TableCell>
              <TableCell>Teletrabajo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockList.map(({ id, day, entry, exit, time, workFromHome }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {day}
                </TableCell>
                <TableCell>{entry}</TableCell>
                <TableCell>{exit}</TableCell>
                <TableCell>{time}</TableCell>
                <TableCell>{workFromHome ? "S" : "N"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(HomeComponent);
