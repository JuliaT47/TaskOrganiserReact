import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

export function List() {
  const [task, setTask] = useState([
    { id: 1, name: "First task", isChecked: false },
    { id: 2, name: "Second task", isChecked: false },
    { id: 3, name: "Third task", isChecked: false },
    { id: 4, name: "Fourth task", isChecked: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [select, setSelect] = useState("All");
  const [search, setSearch] = useState("");

  const selectOption = [
    { id: 1, value: "Active" },
    { id: 2, value: "Completed" },
    { id: 3, value: "All" },
  ];

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim().length < 5) {
      alert("Task name must be more than 5 characters");
    } else if (newTask.trim().length > 20) {
      alert("Task name must be between 5 and 20 characters");
    } else {
      const newTaskObject = { id: uuidv4(), name: newTask, isChecked: false };
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

  const handleCheckboxChange = (taskId) => {
    setTask(
      task.map((taskItem) => {
        if (taskItem.id === taskId) {
          return { ...taskItem, isChecked: !taskItem.isChecked };
        }
        return taskItem;
      })
    );
  };

  const handleSelectChange = (event) => {
    const select = event.target.value;
    setSelect(select);
  };

  const handleTaskSearch = (event) => {
    const search = event.target.value;
    setSearch(search);
  };

  const filteredTasks = task.filter((taskItem) => {
    const taskName = taskItem.name.toLowerCase();
    const searchTerm = search.toLowerCase();

    const isSearchMatch = taskName.includes(searchTerm);

    const isSelected =
      select === "Active"
        ? !taskItem.isChecked
        : select === "Completed"
          ? taskItem.isChecked
          : true;

    return isSearchMatch && isSelected;
  });

  return (
    <div className={styles.list}>
      <h4>React Homework 2/3/8</h4>
      <label htmlFor="search">Search Tasks</label>
      <input
        onChange={handleTaskSearch}
        value={search}
        type="text"
        name="search"
        placeholder="Search tasks"
      />
      <label htmlFor="newtask">Add Task</label>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="New task"
        name="newtask"
      />
      <label htmlFor="select">Sort tasks</label>
      <select
        className={styles.select}
        onChange={handleSelectChange}
        value={select}
        name="select"
        id="select"
      >
        {selectOption.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <ul>
        {filteredTasks.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isChecked ? "line-through" : "none",
              }}
            >
              {item.name}
            </span>
            <input
              className={styles.checkbox}
              onChange={() => handleCheckboxChange(item.id)}
              checked={item.isChecked}
              type="checkbox"
              name="checkbox"
              id={`checkbox-${item.id}`}
            />
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
