import DateFnsUtils from '@date-io/date-fns';
import {
  createMuiTheme,
  createStyles,
  InputAdornment,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import React, { FC } from 'react';
import Icon from '../Icon';

const styles = (theme: Theme) => {
  return createStyles({
    inputDatePicker: {
      backgroundColor: theme.colors.white,
      padding: '6px 14px',
      border: `solid 1px ${theme.colors.blueSilver}`,
      fontSize: '14px',
      borderRadius: '3px',
      width: '160px',
      fontWeight: 'lighter',
    },
  });
};

const datePickerTheme = createMuiTheme({
  typography: {
    fontFamily: '"TTNorms", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#a12378',
    },
    secondary: {
      main: '#fff',
    },
    action: {
      selected: '#f8eef5',
      hover: '#f8eef5',
    },
    text: {
      primary: '#333',
    },
  },
  overrides: {
    MuiIcon: {
      root: {
        width: '16px',
        height: '16px',
        fontSize: '12px',
        color: '#5a5a5a',
      },
    },
    MuiSvgIcon: {
      root: {
        width: '16px',
        height: '16px',
        fontSize: '12px',
        color: '#5a5a5a',
      },
    },
  },
});

interface ComponentProps {
  click: (date: Date) => void;
  date: Date;
}
export type InternalProps = ComponentProps & WithStyles<typeof styles>;

const DatePickerComponent: FC<InternalProps> = ({
  classes,
  click,
  date,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(date);
  const handleDateChange = (date: Date) => {
      setSelectedDate(date);
      click(date);
  };

  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiThemeProvider theme={datePickerTheme}>
          <DatePicker
            format="dd/MM/yyyy"
            InputProps={{
              className: classes.inputDatePicker,
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <Icon type="calendar" />
                </InputAdornment>
              ),
            }}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DatePickerComponent);
