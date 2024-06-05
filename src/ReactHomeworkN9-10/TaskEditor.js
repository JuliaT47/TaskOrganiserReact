import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "../App.module.css";
import ReactDOM from "react-dom";

axios.defaults.baseURL = "http://localhost:3000/";

const TaskEditor = ({ task, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [creationDate, setCreationDate] = useState("");
  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`todos/${taskId}`);
        const taskData = response.data;
        setName(taskData.name);
        setDescription(taskData.description);
        setCompleted(taskData.isChecked);
        setCreationDate(taskData.creationDate);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    if (!task && taskId) {
      fetchTask();
    } else if (task) {
      setName(task.name);
      setDescription(task.description);
      setCompleted(task.isChecked);
    }
  }, [task, taskId]);

  const handleSave = async () => {
    const editedTask = {
      id: taskId,
      name,
      description,
      isChecked: completed,
      creationDate,
    };
    try {
      await axios.put(`todos/${editedTask.id}`, editedTask);
      if (onSave) {
        onSave(editedTask);
      }
      navigate("/todo");
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleCancel = () => {
    navigate("/todo");
  };

  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <label htmlFor="editTaskName">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task name"
          name="editTaskName"
        />
        <label htmlFor="editTaskDescription">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          name="editTaskDescription"
        />
        <div>
          <label htmlFor="editTaskCompleted">Completed</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            name="editTaskCompleted"
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>,
    document.body
  );
};

export default TaskEditor;
