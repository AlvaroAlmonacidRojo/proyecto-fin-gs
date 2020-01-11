import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import React from "react";

import Translate from "../../components/Translation";
import { Tab } from "../../redux/reducers/currentPageMeta";
import ListTab from "../ListTab";
import { Divider } from "@material-ui/core";

const styles = (theme: Theme) => ({
  drawer: {
    width: `300px`,
    flexShrink: 0
  },
  drawerPaper: {
    width: `300px`
  }
});

export interface ComponentProps {
  active?: Tab;
}

type Props = ComponentProps & WithStyles<typeof styles>;

export const SideBar = ({ classes, active }: Props) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper
      }}
    >
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
  );
};

export default withStyles(styles)(SideBar);
