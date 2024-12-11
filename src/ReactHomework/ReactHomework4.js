import { Component } from "react";
import styles from "./App.module.css";

class ToDoComponent extends Component {
  state = {
    todos: [],
    input: "",
  };

  componentDidMount() {
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      this.setState({ todos: JSON.parse(lsTodos) });
    }
  }

  addTast = () => {
    const updatedTodos = [...this.state.todos, this.state.input];
    this.setState({ todos: updatedTodos, input: "" }, () => {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    });
  };
  onchangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };
  handleDelete = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos, input: "" });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      this.setState({ todos: [], inout: "" }, () => {
        localStorage.setItem("todos", JSON.stringify([]));
      });
    }
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.addTast();
    }
  };

  render() {
    const { todos, input } = this.state;
    return (
      <div className={styles.todo}>
        <h4>React Homework 4</h4>
        <input
          value={this.state.input}
          onChange={this.onchangeHandler}
          placeholder="New task"
          onKeyDown={this.handleKeyPress}
        />
        {this.state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => this.handleDelete(index)}>Delete</button>
          </li>
        ))}
        <p>Total number of tasks: {todos.length}</p>
        <button onClick={this.addTast}>Add task</button>
        <br />
        <button onClick={this.handleClear}>Clear the list!</button>
      </div>
    );
  }
}

export default ToDoComponent;
// checked
