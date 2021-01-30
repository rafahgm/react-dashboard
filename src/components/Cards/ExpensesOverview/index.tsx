import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation, EventTracker } from "@devexpress/dx-react-chart";
import { Paper, Typography } from "@material-ui/core";
import React from "react";

const data = [
  { year: "Total Compras", population: 142097 },
  { year: "Contas a Receber", population: 42582 },
  { year: "Em Atraso", population: 26533 },
];
const ExpensesOverview = () => {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
      elevation={3}
    >
      <Typography color='textSecondary' align='center'>
        Funil Contas a Pagar
      </Typography>
      <Chart data={data} height={200}>
        <ArgumentAxis />
        <ValueAxis showGrid={true} indentFromAxis={10} />

        <BarSeries valueField='population' argumentField='year' />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default ExpensesOverview;
