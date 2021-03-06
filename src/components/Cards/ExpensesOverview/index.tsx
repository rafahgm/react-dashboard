import { Typography } from "@material-ui/core";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import BaseCard from "../BaseCard";

const data = [
  { year: "Total Compras", population: 142097 },
  { year: "Contas a Receber", population: 42582 },
  { year: "Em Atraso", population: 26533 },
];

const CustomizedLabel = (props: any) => {
  return (
    <text
      x={props.x + props.width / 2}
      y={props.y}
      fill={props.fill}
      textAnchor='middle'
      fontFamily='Roboto'
      fontSize='16'
      dy={-10}
    >
      {props.value}
    </text>
  );
};

const ExpensesOverview = () => {
  return (
    <BaseCard minHeight='200px'>
      <div
        style={{
          flexBasis: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography color='textSecondary' align='center' variant='h6'>
          Funil Contas a Pagar
        </Typography>
      </div>
      <div
        style={{
          flexBasis: "90%",
        }}
      >
        <ResponsiveContainer>
          <BarChart data={data} barCategoryGap='20%'>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              style={{
                fontFamily: "Roboto",
              }}
              dataKey='year'
            />
            <YAxis
              style={{
                fontFamily: "Roboto",
              }}
            />
            <Bar
              dataKey='population'
              fill='#8884d8'
              label={<CustomizedLabel />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </BaseCard>
  );
};

export default ExpensesOverview;
