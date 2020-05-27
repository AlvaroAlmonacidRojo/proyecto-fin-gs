import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
  } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
  import React, { FC } from 'react';
  
  const styles = (theme: Theme) =>
    createStyles({
      root: {
        background: theme.colors.white,
        width: '100%',
      },
    });
  
  interface TextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<{}>) => void;
    onFocus?: (event: React.ChangeEvent<{}>) => void;
    placeholder?: string;
  }
  
  const StyledTextField: FC<TextFieldProps & WithStyles<typeof styles>> = ({
    value,
    onChange,
    classes,
    placeholder,
    onFocus,
  }) => {
    return (
      <TextField
        id="outlined-bare"
        margin="none"
        variant="outlined"
        value={value}
        classes={classes}
        inputProps={{
          'aria-label': 'reason',
        }}
        onChange={onChange}
        multiline
        fullWidth
        rows="4"
        placeholder={placeholder}
        onFocus={onFocus}
      />
    );
  };
  
  export default withStyles(styles)(StyledTextField);
  