import { Box, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import People from "./components/People";
import React from "react";
import Broker from "./components/Broker";
import Realstate from "./components/Realstate";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      marginTop: 64,
      [theme.breakpoints.up("lg")]: {
        marginLeft: 240,
        width: `calc(100% - 240px)`,
      },

      height: `calc(100vh - 64px)`,
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
      backgroundColor: theme.palette.grey[300],
    },

    gridContainer: {
      display: "grid",
      height: "100%",
      width: "100%",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(16, 1fr)",
      backgroundColor: "yellow",
      columnGap: 10,
      rowGap: 10,
      padding: 10,
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.gridContainer}>
        <div style={{ height: "100%", gridRowEnd: "span 5" }}>
          <Realstate />
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            gridRowEnd: "span 5",
          }}
        >
          <People />
        </div>
        <div style={{ height: "100%", gridRowEnd: "span 7" }}>
          <Broker />
        </div>
        <Paper
          style={{
            height: "100%",
            width: "100%",
            gridRowEnd: "span 7",
          }}
        ></Paper>

        <Paper
          style={{
            height: "100%",
            width: "100%",
            gridRow: "6 / span 11",
            gridColumnEnd: "span 2",
          }}
        ></Paper>

        <Paper
          style={{
            height: "100%",
            width: "100%",
            gridRow: "8 / span 9",
            gridColumnEnd: "span 2",
          }}
        ></Paper>
      </div>
    </Box>
  );
};

export default Home;
