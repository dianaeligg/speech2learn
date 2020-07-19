import React from "react";
import Game from "./views/game";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={process.env.PUBLIC_URL + "/images/logo.png"} /> */}
        <div class="mainLogo">speech2Learn</div>
        <Game />
      </header>
    </div>
  );
}

export default App;
