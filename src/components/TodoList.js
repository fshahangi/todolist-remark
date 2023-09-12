import React from "react";
import Todo from "./Todo";

const TodoList = ({ setInfo, info }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {info.filteredTodos.map((item) => (
            <Todo
              setInfo={setInfo}
              info={info}
              title={item.title}
              key={info.todos.id}
              todo={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
