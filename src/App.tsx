import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useLocal } from "./helper/Localstorage";
import { Service } from "./Service";
import { iUsestate } from "./types/usestate";
import Navbar from "./components/Navbar";
import Profile from "./pages/Filter";
import Home from "./pages/Home";
import SingleProducts from "./pages/SingleProducts";

function App() {
  const [info, setInfo] = useState<iUsestate>({
    todos: [],
    status: "all",
    filteredTodos: [],
  });

  useEffect(() => {
    //const varcache = LoadDatafunction();
    //console.log(varcache());
    LoadDatafunction()();
  }, []);

  const localData = useLocal("todos");
  const LoadDatafunction = () => {
    const cache = localData.getData();
    return () => {
      if (cache !== null && cache.length > 0) {
        setInfo((preVal) => ({ ...preVal, todos: cache }));
        // return cache;
      } else {
        Service().then((data) => {
          setInfo((preVal) => ({
            ...preVal,
            todos: data.slice(1, 3),
          }));
          localData.setData(data);
        });
        // return info;
      }
    };
  };

  useEffect(() => {
    filterHandler();
    localData.setData(info.todos);
  }, [info.todos, info.status]);

  //functions
  const filterHandler = () => {
    switch (info.status) {
      case "completed":
        setInfo((preVal) => ({
          ...preVal,
          filteredTodos: info.todos.filter((todo) => todo.completed === true),
        }));
        break;
      case "uncompleted":
        setInfo((preVal) => ({
          ...preVal,
          filteredTodos: info.todos.filter((todo) => todo.completed === false),
        }));
        break;
      default:
        setInfo((preVal) => ({ ...preVal, filteredTodos: info.todos }));
        break;
    }
  };

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Profile":
      component = <Profile />;
      break;
    case "/Products":
      component = <SingleProducts />;
      break;
  }

  return (
    <div className="App">
      {/* <Navbar />
      <div className="container">{component}</div> */}

      <header>
        <h1> Todo List</h1>
      </header>
      <Form setInfo={setInfo} info={info} />
      <TodoList setInfo={setInfo} info={info} />
    </div>
  );
}

export default App;
