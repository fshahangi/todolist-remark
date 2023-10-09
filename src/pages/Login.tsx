import React, { useRef } from "react";
import { useLocalLogIn } from "../helper/LocaldtorageLogIn";
import { TlogIn } from "../types/todo";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const localData = useLocalLogIn("loggedInUsername");
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const submitHnadler = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.current) {
      localData.setLogInData(username.current.value);
    }
    //useLocalLogIn("loggedInUsername").setLogInData(username.current.value);

    navigate(-1);
    //localData.removeItem("loggedInUsername")
  };

  return (
    <div>
      <form onSubmit={submitHnadler}>
        <div className="login-input">
          <input type="text" placeholder="username" ref={username} />
        </div>
        <div className="login-input">
          <input type="password" placeholder="password" ref={password} />
        </div>
        <button className="todo-button">login</button>
      </form>
    </div>
  );
};

export default Login;
