import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      padding: 10,
      minHeight: "200px",
    },
    title: {},
  })
);

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomLabel = (props: any) => {
  const RADIAN = Math.PI / 180.0;
  const radius =
    props.innerRadius + (props.outerRadius - props.innerRadius) * 1.2;
  const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
  const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='#000'
      fontFamily='Roboto'
      fontSize='14px'
      alignmentBaseline='central'
      textAnchor={x > props.cx ? "start" : "end"}
      dominantBaseline='central'
    >
      <tspan>{props.name}</tspan>
      <tspan x={x} dy='20px'>
        {props.value}%
      </tspan>
    </text>
  );
};

const CreditOverview = () => {
  const classes = useStyles();
  const data = [
    { name: "Faturas Vencidas", value: 2 },
    { name: "Faturas em aberto", value: 28 },
    { name: "Faturas Pagas", value: 70 },
  ];
  return (
    <Paper className={classes.paper} elevation={3}>
      <div
        style={{
          flexBasis: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography align='center' color='textSecondary' variant='h6'>
          Faturas Por Status
        </Typography>
      </div>
      <div style={{ flexBasis: "90%" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey='value'
              fill={purple[500]}
              label={<CustomLabel />}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default CreditOverview;
