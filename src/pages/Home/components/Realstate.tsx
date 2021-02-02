import { Chip, Paper, Typography, useTheme } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import React from "react";

const Realstate = () => {
  const theme = useTheme();
  return (
    <Paper
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.info.main,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        color: "#fafafa",
      }}
    >
      <div style={{ flexBasis: "40%", display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
          <Typography variant='subtitle1'>Imóveis visiveis</Typography>
          <Typography variant='h4' style={{ fontWeight: "bold" }}>
            47
          </Typography>
        </div>
        <HomeRoundedIcon
          style={{
            color: theme.palette.info.dark,
            fontSize: "4.8rem",
            marginLeft: "auto",
          }}
        />
      </div>
      <div
        style={{
          flexBasis: "60%",
          display: "flex",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <div style={{ display: "flex", width: "100%", marginBottom: 5 }}>
          <Typography variant='subtitle2'>Casas duplex</Typography>
          <Chip
            size='small'
            color='primary'
            label='28'
            style={{
              marginLeft: "auto",
              fontSize: "0.7rem",
              fontWeight: 600,
              backgroundColor: theme.palette.success.main,
            }}
          />
        </div>
        <div style={{ display: "flex", width: "100%", marginBottom: 5 }}>
          <Typography variant='subtitle2'>Apartamentos</Typography>
          <Chip
            size='small'
            color='primary'
            label='8'
            style={{
              marginLeft: "auto",
              fontSize: "0.7rem",
              fontWeight: 600,
              backgroundColor: theme.palette.success.main,
            }}
          />
        </div>
        <div style={{ display: "flex", width: "100%", marginBottom: 5 }}>
          <Typography variant='subtitle2'>Outros</Typography>
          <Chip
            size='small'
            color='primary'
            label='11'
            style={{
              marginLeft: "auto",
              fontSize: "0.7rem",
              fontWeight: 600,
              backgroundColor: theme.palette.success.main,
            }}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Realstate;
