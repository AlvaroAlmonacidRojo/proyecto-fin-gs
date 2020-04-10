import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { ReactNode, useState } from 'react';

import {
  AppBar,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import Translate from '../../components/Translation';
import { Tab } from '../../redux/reducers/currentPageMeta';
import ListTab from '../ListTab';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { theme } from '../ThemeProvider';

const drawerWidth = theme.appDrawer.width!;

const styles = () => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: '2px'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: 1,
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: '10px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

export interface ComponentProps {
  active?: Tab;
  children: ReactNode;
}

type Props = ComponentProps & WithStyles<typeof styles>;

export const SideBar = ({ classes, active, children }: Props) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            <Translate message='components.sideBar.title' />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component='nav' disablePadding>
          <ListTab
            icon='home'
            selected={active === 'Home'}
            link='/'
            text={<Translate message='components.sideBar.home.label' />}
          />
          <ListTab
            icon='group'
            selected={active === 'Home'}
            link='/'
            text='Empleados'
          />
          <ListTab
            icon='group'
            selected={active === 'Home'}
            link='/'
            text='Proyectos'
          />
          <ListTab
            icon='beachAccess'
            selected={active === 'Home'}
            link='/'
            text='Vacaciones'
          />
          <ListTab
            icon='dashboard'
            selected={active === 'Home'}
            link='/'
            text='Administración'
          />
          <Divider />
          <ListTab
            icon='group'
            selected={active === 'Home'}
            link='/'
            text='Logout'
          />
        </List>
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default withStyles(styles)(SideBar);
