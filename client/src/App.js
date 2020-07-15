import React from "react";
import Game from "./views/game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
        <Game />
      </header>
    </div>
  );
}

export default App;
