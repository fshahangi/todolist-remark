import React from "react";
import Todo from "./Todo";

import { iUsestate } from "../types/usestate";

interface TodoListProps {
  setInfo: React.Dispatch<React.SetStateAction<iUsestate>>;
  info: iUsestate;
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
              key={item.userId}
              todo={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
