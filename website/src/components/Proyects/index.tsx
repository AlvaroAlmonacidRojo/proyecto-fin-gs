import { createStyles, Paper, Theme, withStyles, WithStyles, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import Typography from '../Typography';
import Translate from '../Translation';
import { mockProyects } from './mockProyects';
import Button from '../Button';

const styles = (theme: Theme) =>
    createStyles({
        paper: {
            padding: '20px',
            height: '100%',
            margin: '20px',
        },
        proyect: {
            margin: '20px',
        }
    });

type Props = WithStyles<typeof styles>;

const ProyectsComponent: FC<Props> = ({ classes,
}) => {
    const allEmployees = '12';
    return (
        <Paper className={classes.paper}>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    <Translate message="components.proyects.allProyects.title" />
                </Typography>
                <Typography variant="caption" weight="lighter" customColor="boulder">
                    {allEmployees}{' '}
                    <Translate message="components.proyects.allProyects.count" />
                </Typography>
                <Grid className={classes.proyect}>
                    <Button variant="contained" color="secondary">Nuevo proyecto</Button>
                </Grid>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell numeric>Empleados</TableCell>
                                <TableCell numeric>Creación</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mockProyects.map(({ id, name, employees, created_at, }) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {name}
                                    </TableCell>
                                    <TableCell numeric>{employees}</TableCell>
                                    <TableCell numeric>{created_at}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
        </Paper>
    );
};

export default withStyles(styles)(ProyectsComponent);
