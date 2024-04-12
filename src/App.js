import "./App.css";
import "./JSHomework1";
import "./JSHomework2";
import "./JSHomework3";
import "./JSHomework4";
import "./JSHomework5";
import "./JSHomework6";
import "./JSHomework7";
import "./JSHomework8";
import "./JSHomework11";
import "./JSHomework13";
import HelloWorld from "./JSHomework14";
import { HelloWorldComponent } from "./JSHomework14";
import Game from "./JSHomework13";

import { useState } from "react";
import { createElement } from "react";

function App() {
  const component = "non-functional";
  return (
    <div className="App">
      <header className="App-header">
        {component === "functional" ? <HelloWorld /> : <HelloWorldComponent />}
      </header>
    </div>
  );
}

export default App;

// function JSHomework13() {
//   return (
//     <div>
//       <Game />
//     </div>
//   );
// }

// export default Game;
