import styles from "./App.module.css";
import { HelloWorldComponent } from "./ReactHomework1";
import Game from "./JSHomework13";
import { List } from "./ReactHomework2-3-8";

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
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import NotFoundPage from "./pages/not-found";

function App() {
  const component = "non-functional";
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </header>
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </div> */}
      <div className={styles.Appmain}>
        <List />
        <ToDoComponent />
      </div>
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
