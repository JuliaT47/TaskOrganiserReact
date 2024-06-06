import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const getTodosList = async () => {
  const todos = await axios.get("todos");
  return todos.data;
};
