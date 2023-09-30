import React from "react";
import Todo from "./Todo";
import { iInfo } from "../types/info";
import { iUsestate } from "../types/usestate";

interface TodoListProps {
  setInfo: React.Dispatch<React.SetStateAction<iUsestate>>;
  info: iInfo;
}
const TodoList = ({ setInfo, info }: TodoListProps) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {info.filteredTodos.map((item) => (
            <Todo
              setInfo={setInfo}
              info={info}
              title={item.title}
              // key={info.todos.id}
              todo={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
