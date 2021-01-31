import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";
import { orange } from "@material-ui/core/colors";
import TopBar from "./components/TopBar";

const theme = createMuiTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <SideMenu />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
