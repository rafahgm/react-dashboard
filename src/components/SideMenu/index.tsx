import React from "react";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import {
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AttachMoney, Home } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

const SideMenu = () => {
  const classes = useStyles();

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Página inicial' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText primary='Contas a pagar' />
        </ListItem>
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer}>
      <Hidden xsDown implementation='css'>
        <Drawer variant='permanent' classes={{ paper: classes.drawerPaper }}>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideMenu;
