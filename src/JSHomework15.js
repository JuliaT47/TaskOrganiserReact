import { useState } from "react";

export function List() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <div className="list">
      <h4>Homework 15</h4>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="New task"
      ></input>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p>Total number of tasks: {task.length}</p>
      <button onClick={handleAddTask}>Add a task</button>
    </div>
  );
}
