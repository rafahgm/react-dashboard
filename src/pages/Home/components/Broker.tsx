import { Paper, Tabs, Tab, Typography, Chip } from "@material-ui/core";
import React, { CSSProperties } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useTheme } from "@material-ui/core/styles";

const TabPanel: React.FC<{ value: any; index: any; style?: CSSProperties }> = ({
  children,
  value,
  index,
  style,
}) => (
  <div
    role='tabpanel'
    hidden={value !== index}
    id={`tabpanel-${index}`}
    style={{ width: "100%", ...style }}
  >
    {children}
  </div>
);

function Broker() {
  const theme = useTheme();
  const [tabValue, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };

  const tabStyle: CSSProperties = {
    minWidth: 0,
    fontSize: "0.9rem",
  };
  return (
    <Paper
      style={{
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexBasis: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: theme.palette.warning.main,
        }}
      >
        <AccountCircleIcon style={{ fontSize: "6rem", color: "#fafafa" }} />
        <Typography style={{ color: "#fafafa" }}>Corretor A</Typography>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", flexBasis: "50%" }}
      >
        <Tabs value={tabValue} variant='fullWidth' onChange={handleChange}>
          <Tab style={tabStyle} label='Semanal' color='primary'></Tab>
          <Tab style={tabStyle} label='Mensal'></Tab>
          <Tab style={tabStyle} label='Anual'></Tab>
        </Tabs>
        <TabPanel
          value={tabValue}
          index={0}
          style={{ height: "auto", flex: "1 1 auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", width: "80%" }}>
              <Typography color='primary' variant='subtitle2'>
                Imóveis Captados
              </Typography>
              <Chip
                size='small'
                color='primary'
                label='5'
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  backgroundColor: theme.palette.info.main,
                }}
              />
            </div>
            <div style={{ display: "flex", width: "80%" }}>
              <Typography color='primary' variant='subtitle2'>
                Visitas Realizadas
              </Typography>
              <Chip
                size='small'
                color='primary'
                label='21'
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  backgroundColor: theme.palette.info.main,
                }}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value={tabValue}
          index={1}
          style={{ height: "100%", flex: "1 1 auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", width: "80%" }}>
              <Typography color='primary' variant='subtitle2'>
                Imóveis Captados
              </Typography>
              <Chip
                size='small'
                color='primary'
                label='10'
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  backgroundColor: theme.palette.info.main,
                }}
              />
            </div>
            <div style={{ display: "flex", width: "80%" }}>
              <Typography color='primary' variant='subtitle2'>
                Visitas Realizadas
              </Typography>
              <Chip
                size='small'
                color='primary'
                label='42'
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  backgroundColor: theme.palette.info.main,
                }}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value={tabValue}
          index={2}
          style={{ height: "100%", flex: "1 1 auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", width: "80%" }}>
              <Typography color='primary' variant='subtitle2'>
                Imóveis Captados
              </Typography>
              <Chip
                size='small'
                color='primary'
                label='15'
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  backgroundColor: theme.palette.info.main,
                }}
              />
            </div>
            <div style={{ display: "flex", width: "80%" }}>
              <Typography color='primary' variant='subtitle2'>
                Visitas Realizadas
              </Typography>
              <Chip
                size='small'
                color='primary'
                label='53'
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  backgroundColor: theme.palette.info.main,
                }}
              />
            </div>
          </div>
        </TabPanel>
      </div>
    </Paper>
  );
}

export default Broker;
