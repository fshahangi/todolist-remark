import React from "react";
import { Link, Outlet } from "react-router-dom";

const Filter = () => {
  return (
    <div>
      <header>
        Filter Todo: <Link to="/filter/all"> All</Link> |
        <Link to="/filter/complete"> Complete</Link> |
        <Link to="/filter/uncomplete"> Uncomplete</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Filter;
