import { Box } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CreditOverview from "../Cards/CreditOverview";
import ExpensesAge from "../Cards/ExpensesAge";
import ExpensesOverview from "../Cards/ExpensesOverview";
import MonthlyExpenses from "../Cards/MonthlyExpenses";
import PaymentDays from "../Cards/PaymentDays";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: {
      marginLeft: 240,
      width: `calc(100% - ${240}px)`,
      height: "100vh",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(5, 1fr)",
      height: "100%",
      columnGap: 10,
      rowGap: 10,
      padding: 10,
    },
  })
);
const MainContent = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.topbar}>
        <div className={classes.gridContainer}>
          <div>
            <MonthlyExpenses />
          </div>
          <div>
            <MonthlyExpenses />
          </div>
          <div>
            <MonthlyExpenses />
          </div>
          <div>
            <MonthlyExpenses />
          </div>
          <div
            style={{
              gridColumnEnd: "span 2",
              gridRowEnd: "span 2",
            }}
          >
            <ExpensesOverview />
          </div>
          <div
            style={{
              gridColumnEnd: "span 2",
              gridRowEnd: "span 2",
            }}
          >
            <CreditOverview />
          </div>
          <div
            style={{
              gridColumnEnd: "span 2",
              gridRowEnd: "span 2",
            }}
          >
            <PaymentDays />
          </div>
          <div
            style={{
              gridColumnEnd: "span 2",
              gridRowEnd: "span 2",
            }}
          >
            <ExpensesAge />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default MainContent;
