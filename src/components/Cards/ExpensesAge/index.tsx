import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";

const data = [
  { name: "1-30 Dias", value: 50 },
  { name: "31-60 Dias", value: 39 },
  { name: "61-90 Dias", value: 31 },
  { name: "90+ Dias", value: 19 },
];

const CustomizedLabel = (props: any) => {
  return (
    <text
      x={props.x + props.width}
      y={props.y + props.height / 2}
      dx='16px'
      fill={props.fill}
      fontFamily='Roboto'
      fontSize='16'
    >
      {props.value}
    </text>
  );
};

const ExpensesAge = () => {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        minHeight: "200px",
      }}
      elevation={3}
    >
      <div
        style={{
          flexBasis: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography color='textSecondary' align='center' variant='h6'>
          Idade das contas a pagar
        </Typography>
      </div>
      <div
        style={{
          flexBasis: "90%",
        }}
      >
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout='vertical'
            barCategoryGap={1}
            margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
          >
            <XAxis style={{ fontFamily: "Roboto" }} type='number' />
            <YAxis
              style={{ fontFamily: "Roboto" }}
              type='category'
              width={150}
              dataKey='name'
            />
            <Bar dataKey='value' fill='#8884d8' label={<CustomizedLabel />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default ExpensesAge;
