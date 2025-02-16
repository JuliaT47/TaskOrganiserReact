import axios from "axios";

axios.defaults.baseURL = "https://taskorganiserreact.onrender.com";

export const getTodosList = async () => {
  const todos = await axios.get("todos");
  return todos.data;
};
