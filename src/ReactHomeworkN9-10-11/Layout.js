import { NavLink, Outlet } from "react-router-dom";
import styles from "../App.module.css";

const Layout = () => {
  const activeLink = ({ isActive }) =>
    isActive ? styles.activeLink : styles.navLink;

  return (
    <>
      <header>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/todo" className={activeLink}>
          To Do
        </NavLink>
        <NavLink to="/about" className={activeLink}>
          About
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
