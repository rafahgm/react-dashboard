import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerSize = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: {
      marginLeft: drawerSize,
      width: `calc(100% - ${drawerSize}px)`,
    },
  })
);

const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.topbar}>
      <Toolbar>
        <Typography variant='h6' noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
