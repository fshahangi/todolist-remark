import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { getLocalstorage, saveLocalstorage } from "./helper/Localstorage";
import { Service } from "./Service";

function App() {
  const [info, setInfo] = useState({
    todos: [],
    status: "all",
    filteredTodos: [],
  });

  useEffect(() => {
    Service(setInfo);
    getLocalstorage(setInfo, "todos");
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalstorage(info, "todos");
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

  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form setInfo={setInfo} info={info} />
      <TodoList setInfo={setInfo} info={info} />
    </div>
  );
}

export default App;
