import React from "react";

import { Paper, Typography } from "@material-ui/core";
import {
  Chart,
  PieSeries,
  Tooltip,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation, EventTracker } from "@devexpress/dx-react-chart";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
    },
    title: {},
  })
);

const CreditOverview = () => {
  const classes = useStyles();
  const data = [
    { name: "Faturas Vencidas", value: 4 },
    { name: "Faturas em aberto", value: 8 },
    { name: "Faturas Pagas", value: 88 },
  ];
  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography align='center' color='textSecondary' variant='subtitle2'>
        Faturas Por Status (%)
      </Typography>

      <Chart data={data} height={200}>
        <PieSeries argumentField='name' valueField='value' innerRadius={0.7} />
        <EventTracker />
        <Animation />
        <Tooltip />
        <Legend />
      </Chart>
    </Paper>
  );
};

export default CreditOverview;
