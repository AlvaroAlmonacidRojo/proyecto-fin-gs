import { Avatar, createStyles, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Theme, withStyles, WithStyles } from '@material-ui/core';
import React, { FC } from 'react';
import DatePickerComponent from '../DatePicker';
import Icon from '../Icon';
import Translate from '../Translation';
import Typography from '../Typography';
import { mockList } from './mockList';

const styles = (theme: Theme) =>
    createStyles({
        hours: {
            marginTop: '50px',
            marginBottom: '50px',
            textAlign: 'center',
        },
        paper: {
            padding: '20px',
            height: '100%',
            margin: '20px',
        },
        avatar: {
            margin: '10px',
            height: '100px',
            width: '100px',
            fontSize: '50px',
        },
        details: {
            marginBottom: '10px',
        },
    });

type Props = WithStyles<typeof styles>;

const HomeComponent: FC<Props> = ({ classes,
}) => {
    const entry = '08:10';
    const exit = '17:30';
    const time = '8.30 h';
    const avatarLetter = 'A';
    const details = {
        firstName: 'Alvaro Almonacid Rojo',
        lastName: 'Almonacid Rojo',
        description: 'Frontend developer',
        proyectName: 'Proyecto fin GS',
    };
    const handleClick = (date: Date) => null;
    return (
        <Paper className={classes.paper}>
            <Grid container className={classes.details} alignItems="center">
                <Grid item xs={12} md={4} lg={2} >
                    <Avatar className={classes.avatar}>{avatarLetter}</Avatar>
                </Grid>
                <Grid item xs={12} md={8} lg={10}>
                    <Typography weight="lighter" variant="h3">{details.firstName}</Typography>
                    <Typography weight="lighter" variant="body1">{details.description}</Typography>
                    <Typography weight="lighter" variant="body1">{details.proyectName}</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center">
                <Grid item xs={6} lg={11}>
                    <DatePickerComponent click={handleClick} date={new Date()} />
                </Grid>
                <Grid item xs={6} lg={1}><Icon type="replay" color="secondary" fontSize="large" /></Grid>
            </Grid>
            <Grid spacing={0} container className={classes.hours}>
                <Grid item xs={12} md={6}>
                    <Typography weight="normal" variant="h2">
                        <Translate message="components.home.entry.label" />
                    </Typography>
                    <Typography weight="lighter" variant="h3">{entry}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography weight="normal" variant="h2">
                        <Translate message="components.home.exit.label" />
                    </Typography>
                    <Typography weight="lighter" variant="h3">{exit}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography weight="normal" variant="h2">
                        <Translate message="components.home.time.label" />
                    </Typography>
                    <Typography weight="lighter" variant="h3">{time}</Typography>
                </Grid>
            </Grid>
            <Grid container alignContent="center">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dia</TableCell>
                                <TableCell numeric>Entrada</TableCell>
                                <TableCell numeric>Salida</TableCell>
                                <TableCell numeric>Tiempo</TableCell>
                                <TableCell numeric>Teletrabajo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mockList.map(({ id, day, entry, exit, time, workFromHome }) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {day}
                                    </TableCell>
                                    <TableCell numeric>{entry}</TableCell>
                                    <TableCell numeric>{exit}</TableCell>
                                    <TableCell numeric>{time}</TableCell>
                                    <TableCell numeric>{workFromHome ? 'S' : 'N'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
        </Paper>
    );
};

export default withStyles(styles)(HomeComponent);
