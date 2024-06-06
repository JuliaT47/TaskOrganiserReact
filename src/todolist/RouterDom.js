import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Login from "./Login";
import ErrorPage from "./ErrorPage";
import List2 from "./ReactHomework9-10-11";
import TaskEditor from "./TaskEditor";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";

// const Home = lazy(() => import("./Home"));
// const TaskEditor = lazy(() => import("./TaskEditor"));
// const About = lazy(() => import("./About"));
// const NotFound = lazy(() => import("./NotFound"));
// const Layout = lazy(() => import("./Layout"));
// const List2 = lazy(() => import("./ReactHomework9-10-11"));
// const ErrorPage = lazy(() => import("./ErrorPage"));
// const Login = lazy(() => import("./Login"));

const RouterDom = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({ username: null, email: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data, isFetching } = useQuery({
    queryFn: ["userList"],
    queryFn: () =>
      axios.get("http://localhost:3000/auth").then((res) => res.data),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.log({ data, loginUser });

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : navigate("/login");
  };

  useEffect(() => {
    const handleError = (error) => {
      navigate("./errorPage");
    };
  });

  return (
    // <Suspense fallback={"Loading..."}>
    <Routes>
      <Route
        path="/"
        element={
          <Layout isFetching={isFetching} isAuthenticated={isAuthenticated} />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              setLoginUser={setLoginUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="todo"
          element={
            <PrivateRoute
              element={<List2 isAuthenticated={isAuthenticated} />}
            />
          }
        />

        <Route
          path="about"
          element={
            <PrivateRoute
              element={<About isAuthenticated={isAuthenticated} />}
            />
          }
        />
        <Route path="edit/:taskId" element={<TaskEditor />} />
        <Route path="*" element={<NotFound />} />
        <Route path="errorPage" element={<ErrorPage />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};
export default RouterDom;
