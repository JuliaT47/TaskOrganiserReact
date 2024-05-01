import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

export function List() {
  const [task, setTask] = useState([
    { id: 1, name: "First task" },
    { id: 2, name: "Second task" },
    { id: 3, name: "Third task" },
    { id: 4, name: "Fourth task" },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = { id: uuidv4(), name: newTask };
      setTask([...task, newTaskObject]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTaskList = task.filter((task) => task.id !== taskId);
    setTask(updatedTaskList);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className={styles.list}>
      <h4>React Homework 3</h4>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="New task"
      />
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total number of tasks: {task.length}</p>
      <button onClick={handleAddTask}>Add a task</button>
    </div>
  );
}
// checked
