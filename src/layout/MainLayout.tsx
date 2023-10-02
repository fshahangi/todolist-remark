import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <nav className="nav">
        <Link to="/" className="site-title">
          Site TodoList
        </Link>
        <ul>
          <Link to="/filter">Filter</Link>|
          <Link to="/ContactUs">Contact Us</Link>
        </ul>
      </nav>
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
