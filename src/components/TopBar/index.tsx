import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../store/actions";
import { RootState } from "../../store/combineReducers";

const drawerSize = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: {
      [theme.breakpoints.up("lg")]: {
        marginLeft: drawerSize,
        width: `calc(100% - ${drawerSize}px)`,
      },
    },
  })
);

const TopBar = () => {
  const state = useSelector((state: RootState) => state.drawer.open);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    dispatch(toggleDrawer(!state));
  };

  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.topbar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
