import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';

import Translate from "../../components/Translation";
import { Tab } from "../../redux/reducers/currentPageMeta";
import ListTab from "../ListTab";
import { Divider, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import classNames from "classnames";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 250;

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: '2px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,  
  drawer: {
    width: `${drawerWidth}px`,
    flexShrink: 0
  },
  drawerPaper: {
    width: `${drawerWidth}px`,
  },
  hide: {
    display: 'none',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSide: {
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: 1,
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

export interface ComponentProps {
  active?: Tab;
}

type Props = ComponentProps & WithStyles<typeof styles>;

export const SideBar = ({ classes, active }: Props) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
      <div>
    <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          [classes.appBarSide]: !open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            //className={classNames(classes.menuButton)}
          >
            {!open && <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
    </AppBar>
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
      <Divider />
      <List component="nav" disablePadding>
        <ListTab
          selected={active === "Home"}
          link="/"
          text={<Translate message="component.sideBar.home.label" />}
        />
        <ListTab
          selected={active === "Home"}
          link="/"
          text={<Translate message="component.sideBar.home.label" />}
        />
      </List>
    </Drawer>
    </div>
  );
};

export default withStyles(styles)(SideBar);
