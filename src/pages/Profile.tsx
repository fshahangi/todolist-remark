import React from "react";
import { useLocalLogIn } from "../helper/LocaldtorageLogIn";

const Profile = () => {
  const localData = useLocalLogIn("loggedInUsername");
  const currentUser = localData.getLogInData();
  return <div>{`this is ${currentUser} profile`}</div>;
};

export default Profile;
