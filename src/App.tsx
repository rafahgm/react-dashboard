import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";
import TopBar from "./components/TopBar";

let theme = createMuiTheme();

theme = responsiveFontSizes(theme);

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
