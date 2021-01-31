import React from "react";

import { Typography } from "@material-ui/core";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import BaseCard from "../BaseCard";

const MonthlyExpenses = () => {
  const data = [
    { month: "Jan", value: 100 },
    { month: "Fev", value: 200 },
    { month: "Mar", value: 150 },
    { month: "Abr", value: 250 },
  ];
  return (
    <BaseCard minHeight='100px'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexBasis: "40%",
        }}
      >
        <Typography align='center' color='textSecondary' variant='subtitle2'>
          Contas A Pagar
        </Typography>
        <Typography align='center' color='textPrimary' variant='h4'>
          R$ 40.440,25
        </Typography>
      </div>
      <div style={{ flexBasis: "60%" }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ right: 15, left: 15 }}>
            <Line type='monotone' dataKey='value' stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </BaseCard>
  );
};

export default MonthlyExpenses;
