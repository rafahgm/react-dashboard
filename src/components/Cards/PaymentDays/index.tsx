import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "a", value: 25 },
  { name: "b", value: 2 },
  { name: "c", value: 25 },
  { name: "d", value: 52 },
];

function PaymentDays() {
  return (
    <Paper
      style={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        minHeight: "200px",
      }}
      elevation={3}
    >
      <div>
        <Typography align='center' color='textSecondary' variant='h6'>
          Média de dias para pagamento
        </Typography>
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography variant='h4' align='center'>
          104,5
        </Typography>
        <Typography variant='h6' color='textSecondary' align='center'>
          Dias
        </Typography>
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey='value'
              data={data}
              fill='#913913'
              startAngle={180}
              endAngle={0}
              innerRadius='60%'
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
}

export default PaymentDays;
