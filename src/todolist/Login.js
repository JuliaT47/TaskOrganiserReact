import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import AuthContext from "../AuthContext";
import Popup from "./popup";
import styles from "../App.module.css";

const Login = ({ setLoginUser }) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    // };

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
    <div className={styles.loginContainer}>
      <div>
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
      </div>
      {showPopup && (
        <Popup
          message="Please use these details for logging in"
          closePopup={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};
export default Login;
