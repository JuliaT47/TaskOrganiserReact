import { Link } from "react-router-dom";
import styles from "../App.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h2>Welcome to your Task Organiser</h2>
      <p>
        Here you can save your daily tasks, edit them, mark as completed and
        search your existing tasks!
        <Link to="todo">
          <button>Get Started</button>
        </Link>
      </p>
    </div>
  );
};
export default Home;
