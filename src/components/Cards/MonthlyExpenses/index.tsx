import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { Chart, LineSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IDataItem {
  month: number;
  expense: number;
}

const generateData = (start: number, end: number, step: number) => {
  const data: IDataItem[] = [];

  for (let i = start; i < end; i += step) {
    data.push({ expense: Math.random() * 1000 + 1000, month: i });
  }

  return data;
};

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

const MonthlyExpenses = () => {
  const classes = useStyles();
  const data = generateData(0, 30, 1);
  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography align='center' color='textSecondary' variant='subtitle2'>
        Contas A Pagar
      </Typography>
      <Typography align='center' color='textPrimary' variant='h4'>
        R$ 40.440,25
      </Typography>
      <Chart data={data} height={50}>
        <LineSeries valueField='expense' argumentField='month' />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default MonthlyExpenses;
