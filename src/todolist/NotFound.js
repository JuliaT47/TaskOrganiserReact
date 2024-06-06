import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <Link className="link" to="/">
        Press to go to home page
      </Link>
    </div>
  );
};
export default NotFound;
