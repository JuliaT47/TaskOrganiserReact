import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = ({ setLoginUser, setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const handleSubmit = async (event) => {
      event.preventDefault();
    };

    try {
      const response = await axios.get("http://localhost:3000/auth");
      const users = response.data;

      const user = users.find((user) => user.email === email);

      if (user) {
        setLoginUser({ username: user.username, email: user.email });
        setIsAuthenticated(true);
        navigate("/todo");
      } else {
        alert("Invalid email. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="Email"
            placeholder="Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
