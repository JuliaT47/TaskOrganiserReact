import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../App.module.css";
import ReactDOM from "react-dom";

axios.defaults.baseURL = "http://localhost:3000/";

const TaskEditor = ({ task, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description);
      setCompleted(task.isChecked);
    }
  }, [task]);

  const handleSave = async () => {
    const editedTask = { ...task, name, description, isChecked: completed };
    try {
      await axios.put(`todos/${editedTask.id}`, editedTask);
      onSave(editedTask);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
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
