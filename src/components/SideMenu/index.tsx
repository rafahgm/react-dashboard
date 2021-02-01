import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AttachMoney, Home } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/combineReducers";
import { toggleDrawer } from "../../store/actions";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

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
  const state = useSelector((state: RootState) => state.drawer.open);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer(!state));
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Página inicial' />
        </ListItem>
        <ListItem button component={Link} to='/contas'>
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
      <Hidden mdDown implementation='css'>
        <Drawer variant='permanent' classes={{ paper: classes.drawerPaper }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          open={state}
          ModalProps={{ keepMounted: true }}
          onClose={handleDrawerToggle}
        >
          <IconButton edge={false} onClick={handleDrawerToggle}>
            <ArrowBackIcon />
          </IconButton>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideMenu;
