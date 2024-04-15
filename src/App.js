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
import { List } from "./JSHomework15";

import { useState } from "react";
import { createElement } from "react";

function App() {
  const component = "non-functional";
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <Game />
        <div>
          <h4>Homework 14</h4>
          {component === "functional" ? (
            <HelloWorld />
          ) : (
            <HelloWorldComponent />
          )}
        </div>
        <List />
      </header>
    </div>
  );
}

export default App;
