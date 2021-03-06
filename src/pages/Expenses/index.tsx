import { Box } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CreditOverview from "../../components/Cards/CreditOverview";
import ExpensesAge from "../../components/Cards/ExpensesAge";
import ExpensesOverview from "../../components/Cards/ExpensesOverview";
import MonthlyExpenses from "../../components/Cards/MonthlyExpenses";
import PaymentDays from "../../components/Cards/PaymentDays";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: { ...theme.mixins.toolbar },
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
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(5, 1fr)",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        // gridTemplateRows: "repeat(5, 1fr)",
      },
      columnGap: 10,
      width: "100%",
      height: "100%",
      rowGap: 10,
      padding: 10,
    },
  })
);

const Expenses = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
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
  );
};

export default Expenses;
