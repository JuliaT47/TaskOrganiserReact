import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

// useMemo
function UseMemoHook() {
  const [list, setList] = useState([12, 45, 3, 67, 8]);
  const [sum, setSum] = useState(0);

  const memoList = useMemo(() => {
    return list;
  }, [list]);
  const calculateSum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  const handleListChange = () => {
    const calculatedSum = calculateSum(list);
    setSum(calculatedSum);
  };
  return (
    <div>
      <h4>React Homework 6</h4>
      <h5>useMemo</h5>
      {memoList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <p>Sum: {sum}</p>
      <button onClick={handleListChange}>Get sum</button>
    </div>
  );
}
export default UseMemoHook;

//React.memo
const Task = React.memo(({ task, onDelete }) => {
  return (
    <li>
      {task.name}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
});
function ReactMemo() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), name: "Task number 1" },
    { id: uuidv4(), name: "Task number 2" },
    { id: uuidv4(), name: "Task number 3" },
    { id: uuidv4(), name: "Task number 4" },
  ]);

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h5 className={styles.h5ReactMemo}>React.memo</h5>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={handleTaskDelete} />
        ))}
      </ul>
    </div>
  );
}

export { ReactMemo };

//Custom Hook

export const UseWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.customhook}>
      <h5>Custom Hooks (UseWindowWidth)</h5>
      <p>Window Width: {windowWidth}</p>
    </div>
  );
};
