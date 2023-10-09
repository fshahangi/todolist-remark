import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div>
      <header>
        Filter Todo:
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.linkIsActive}` : ""
          }
          to="/filter/all"
        >
          All
        </NavLink>
        |
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.linkIsActive}` : ""
          }
          to="/filter/complete"
        >
          Complete
        </NavLink>
        |
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.linkIsActive}` : ""
          }
          to="/filter/uncomplete"
        >
          Uncomplete
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Filter;
