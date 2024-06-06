import { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import styles from "../App.module.css";
import axios from "axios";
import TaskEditor from "./TaskEditor";
import ErrorBoundary from "./ErrorBoundary";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3000/";

export function List2() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskCompleted, setNewTaskCompleted] = useState(false);
  const [select, setSelect] = useState("All");
  const [search, setSearch] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery("todos", async () => {
    const response = await axios.get("todos");
    return response.data;
  });

  useEffect(() => {
    if (error) {
      navigate("/errorPage");
    }
  }, [error, navigate]);

  useEffect(() => {
    if (todos) {
      setTimeout(() => {
        setTask(todos);
      }, 2000);
    }
  }, [todos]);

  const selectOption = [
    { id: 1, value: "Active" },
    { id: 2, value: "Completed" },
    { id: 3, value: "All" },
  ];

  const handleAddTask = async () => {
    if (!showInput) {
      setShowInput(true);
      return;
    }

    if (newTaskName.trim().length < 5) {
      alert("Task name must be more than 5 characters");
    } else if (newTaskName.trim().length > 20) {
      alert("Task name must be between 5 and 20 characters");
    } else {
      const newTaskObject = {
        id: uuidv4(),
        name: newTaskName,
        description: newTaskDescription,
        isChecked: newTaskCompleted,
        creationDate: new Date().toISOString(),
      };
      try {
        // throw new Error("Simulated error");
        await axios.post("todos", newTaskObject);
        setTask([...task, newTaskObject]);
        setNewTaskName("");
        setNewTaskDescription("");
        setNewTaskCompleted(false);
        setShowInput(false);
      } catch (error) {
        console.error("Error adding task:", error);
        navigate("/errorPage");
      }
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveEditedTask = async (editedTask) => {
    try {
      await axios.put(`todos/${editedTask.id}`, editedTask);
      const updatedTaskList = task.map((task) =>
        task.id === editedTask.id ? editedTask : task
      );
      setTask(updatedTaskList);
      setEditingTask(null);
    } catch (error) {
      console.error("Error saving edited task:", error);
      navigate("/errorPage");
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`todos/${taskId}`);
      const updatedTaskList = task.filter((task) => task.id !== taskId);
      setTask(updatedTaskList);
      if (updatedTaskList.length === 0) {
        setShowInput(false);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      navigate("/errorPage");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleCheckboxChange = async (taskId) => {
    try {
      const updatedTask = task.map((taskItem) => {
        if (taskItem.id === taskId) {
          const updatedTask = { ...taskItem, isChecked: !taskItem.isChecked };
          axios.put(`todos/${taskId}`, updatedTask);
          return updatedTask;
        }
        return taskItem;
      });
      setTask(updatedTask);
    } catch (error) {
      console.error("Error updating task status:", error);
      navigate("/errorPage");
    }
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
    const taskName = taskItem.name?.toLowerCase() || "";
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.list} ${styles.todoDiv}`}>
      <h4>React Homework 10</h4>
      {showInput && (
        <>
          <label htmlFor="newTaskName">Name</label>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Task name"
            name="newTaskName"
          />
          <label htmlFor="newTaskDescription">Description</label>
          <input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Task description"
            name="newTaskDescription"
          />
          <div>
            <label htmlFor="newTaskCompleted">Completed</label>
            <input
              type="checkbox"
              checked={newTaskCompleted}
              onChange={(e) => setNewTaskCompleted(e.target.checked)}
              name="newTaskCompleted"
            />
          </div>
        </>
      )}
      <button onClick={handleAddTask}>Add a task</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {editingTask && (
            <ErrorBoundary>
              <TaskEditor
                task={editingTask}
                onSave={handleSaveEditedTask}
                onCancel={handleCancelEdit}
              />
            </ErrorBoundary>
          )}
          {filteredTasks.length === 0 ? (
            <p>There are no tasks yet.</p>
          ) : (
            <ul>
              {filteredTasks.map((item) => (
                <li key={item.id} className={styles.task}>
                  <div>
                    <strong>Name:</strong> {item.name}
                  </div>
                  <div>
                    <strong>Description:</strong> {item.description}
                  </div>
                  <div>
                    <strong>Completed:</strong> {item.isChecked ? "Yes" : "No"}
                    <input
                      className={styles.checkbox}
                      onChange={() => handleCheckboxChange(item.id)}
                      checked={item.isChecked}
                      type="checkbox"
                      name="checkbox"
                      id={`checkbox-${item.id}`}
                    />
                  </div>
                  <div>
                    <strong>Creation Date:</strong>{" "}
                    {new Date(item.creationDate).toLocaleString()}
                  </div>
                  <Link to={`/edit/${item.id}`}>
                    <button>Edit</button>
                  </Link>
                  {/* <button onClick={() => handleEditTask(item)}>Edit</button> */}
                  <button onClick={() => handleDeleteTask(item.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
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
      <label htmlFor="search">Search Tasks</label>
      <input
        onChange={handleTaskSearch}
        value={search}
        type="text"
        name="search"
        placeholder="Search tasks"
      />
      <p>Total number of tasks: {task.length}</p>
    </div>
  );
}
