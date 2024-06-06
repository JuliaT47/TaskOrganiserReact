import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Error</h2>
      <p>Something went wrong</p>
      <Link className="link" to="/">
        Go back to the main page
      </Link>
    </div>
  );
};
export default ErrorPage;
