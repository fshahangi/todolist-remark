import React from "react";
import MainHeader from "./MainHeader";
import { Link, Outlet } from "react-router-dom";

const FilterLayout = () => {
  return (
    <div>
      <div>
        <MainHeader />
        <nav className="nav">
          <Link to="/" className="site-title">
            Site TodoList
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default FilterLayout;
