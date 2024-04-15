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
import HelloWorld from "./ReactHomework1";
import { HelloWorldComponent } from "./ReactHomework1";
import Game from "./JSHomework13";
import { List } from "./ReactHomework2";

import { useState } from "react";
import { createElement } from "react";

function App() {
  const component = "non-functional";
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>React Homework 1</h4>
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
