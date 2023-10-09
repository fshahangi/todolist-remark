import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLocalLogIn } from "../helper/LocaldtorageLogIn";

const ProtectedLayout = () => {
  const localData = useLocalLogIn("loggedInUsername");
  const currentUser = localData.getLogInData();
  return (
    <div>
      {currentUser === null ? <Navigate to="/login" /> : null}
      <h1>protected Layout</h1>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
