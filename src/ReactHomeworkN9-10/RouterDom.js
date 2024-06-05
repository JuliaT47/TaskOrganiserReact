import { Routes, Route } from "react-router-dom";
import { List2 } from "./ReactHomework9-10";
import About from "./About";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Home from "./Home";
import TaskEditor from "./TaskEditor";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todo" element={<List2 />} />
        <Route path="edit/:taskId" element={<TaskEditor />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default RouterDom;
