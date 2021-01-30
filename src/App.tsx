import React from "react";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className='App'>
      <SideMenu />
      <MainContent />
    </div>
  );
}

export default App;
