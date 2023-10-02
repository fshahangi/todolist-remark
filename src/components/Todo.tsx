import React from "react";
import { iInfo } from "../types/info";
import { iTodo } from "../types/todo";
import { iUsestate } from "../types/usestate";
import { Link } from "react-router-dom";

interface TodoProps {
  setInfo: React.Dispatch<React.SetStateAction<iUsestate>>;
  info: iInfo;
  todo: iTodo;
  title: string;
}

const Todo = ({ setInfo, info, todo, title }: TodoProps) => {
  const deletehandler = () => {
    setInfo((preVal) => ({
      ...preVal,
      todos: info.todos.filter((item) => item.id !== todo.id),
    }));
  };

  const completeHandler = () => {
    setInfo((preVal) => ({
      ...preVal,
      todos: info.todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    }));
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <Link state={todo} to={`/products/${todo.id}`}>
          {title}
        </Link>
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>

      <button className="trash-btn" onClick={deletehandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
