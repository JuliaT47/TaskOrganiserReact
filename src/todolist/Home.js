import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to your Task Orginiser</h2>
      <p>
        Here you can save your daily tasks, edit them, mark as complete and
        search your existing tasks!
        <Link to="/todo">
          <button>Get Started</button>
        </Link>
      </p>
    </div>
  );
};
export default Home;
