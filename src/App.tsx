import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { Home, Expenses } from "./pages";
import SideMenu from "./components/SideMenu";
import TopBar from "./components/TopBar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import store from "./store";

let theme = createMuiTheme();

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TopBar />
        <Router>
          <SideMenu />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/contas'>
              <Expenses />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
