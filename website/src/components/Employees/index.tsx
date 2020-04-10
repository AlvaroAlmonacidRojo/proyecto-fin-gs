import { createStyles, Paper, Theme, withStyles, WithStyles, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import Typography from '../Typography';
import Translate from '../Translation';
import Button from '../Button';

const styles = (theme: Theme) =>
    createStyles({
        paper: {
            padding: '20px',
            height: '100%',
            margin: '20px',
        },
        employ: {
            margin: '20px',
        },
    });

type Props = WithStyles<typeof styles>;

const EmployeesComponent: FC<Props> = ({ classes,
}) => {
    const allEmployees = '120';
    return (
        <Paper className={classes.paper}>
            <Typography
                component="h3"
                variant="h3"
            >
                <Translate message="components.employees.allEmployees.title" />
            </Typography>
            <Typography variant="caption" weight="lighter" customColor="boulder">
                {allEmployees}{' '}
                <Translate message="components.employees.allEmployees.count" />
            </Typography>
            <Grid className={classes.employ}>
                <Button variant="contained" color="secondary">Nuevo empleado</Button>
            </Grid>
        </Paper>
    );
};

export default withStyles(styles)(EmployeesComponent);
