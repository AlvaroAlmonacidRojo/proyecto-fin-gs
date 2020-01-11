import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import React, { FC, ReactNode } from 'react';

import ListItemLink from '../ListItemLink';

export const StyledListItem = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '16px 18px',
      '&:focus': {
        color: 'black',
        backgroundColor: 'red',
      },
    },
  }),
)(ListItemLink);

export const StyledListItemIcon = withStyles({
  root: {
    paddingRight: '12px',
    paddingLeft: '0px',
    marginRight: '0px',
  },
})(ListItemIcon);

export const StyledListItemText = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  }),
)(ListItemText);

const styles = (theme: Theme) =>
  createStyles({
    selected: {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
    },
  });

interface ComponentProp {
  selected: boolean;
  link: string;
  text: ReactNode;
}

type Props = ComponentProp & WithStyles<typeof styles>;

export const ListTab: FC<Props> = ({ selected, link, text, classes }) => {
  const selectedClass = selected ? classes.selected : '';
  return (
    <StyledListItem button disableGutters={false} to={link} selected={selected}>
      <StyledListItemText
        className={selectedClass}
        primary={text}
        primaryTypographyProps={{
          className: selectedClass,
          variant: 'body1',
        }}
      />
    </StyledListItem>
  );
};

export default withStyles(styles)(ListTab);
