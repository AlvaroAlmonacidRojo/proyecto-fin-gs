import { createStyles, Paper, Theme, withStyles, WithStyles } from '@material-ui/core';
import React, { FC } from 'react';

const styles = (theme: Theme) =>
    createStyles({
        paper: {
            padding: '20px',
            height: '100%',
            margin: '20px',
        },
    });

type Props = WithStyles<typeof styles>;

const HolidaysComponent: FC<Props> = ({ classes,
}) => {
    const holidays = 'Vacaciones';
    return (
        <Paper className={classes.paper}>
            {holidays}
        </Paper>
    );
};

export default withStyles(styles)(HolidaysComponent);
