import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { Link, Outlet } from "react-router-dom";
import { useLocalLogIn } from "../helper/LocaldtorageLogIn";

const MainLayout = () => {
  const localData = useLocalLogIn("loggedInUsername");
  const currentUser = localData.getLogInData();
  return (
    <div>
      <MainHeader />
      <nav className="nav">
        <Link to="/" className="site-title">
          Site TodoList
        </Link>
        <ul>
          <Link to="/filter">Filter</Link>|
          <Link to="/ContactUs">Contact Us</Link>|
          {currentUser ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </ul>
      </nav>
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
