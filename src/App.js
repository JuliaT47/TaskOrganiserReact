import styles from "./App.module.css";
import HelloWorld from "./ReactHomework1";
import { HelloWorldComponent } from "./ReactHomework1";
import Game from "./JSHomework13";
import { List } from "./ReactHomework2-3";

import { useState } from "react";
import { createElement } from "react";
import ToDoComponent from "./ReactHomework4";
import UseEffectHook, {
  UseLayoutEffectHook,
  UseReducerHook,
  UseRefHook,
  UseStateHook,
} from "./ReactHomework5";
import UseMemoHook, { ReactMemo, UseWindowWidth } from "./ReactHomework6";

function App() {
  const component = "non-functional";
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <div>
          <h4>React Homework 1</h4>
          {component === "functional" ? (
            <HelloWorld />
          ) : (
            <HelloWorldComponent />
          )}
        </div>
        <List />
        <ToDoComponent />
      </header>
      <p className={styles.break}>
        ________________________________________________________________________________________________
      </p>
      <div className={styles.Hooks}>
        <div>
          <UseEffectHook />
          <UseLayoutEffectHook />
          <UseStateHook />
        </div>
        <UseReducerHook />
        <UseRefHook />
      </div>
      <p className={styles.break}>
        ________________________________________________________________________________________________
      </p>
      <div className={styles.Hooks}>
        <UseMemoHook />
        <ReactMemo />
        <UseWindowWidth />
      </div>
    </div>
  );
}

export default App;
