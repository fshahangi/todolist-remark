import React, { useState } from "react";

const Form = ({ setInfo, info }) => {
  const [inputText, setInputText] = useState("");
  const inputtextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();

    setInfo((preVal) => ({
      ...preVal,
      todos: [
        ...info.todos,
        { title: inputText, completed: false, id: Math.random() * 1000 },
      ],
    }));

    setInputText("");
  };
  const statusHandler = (e) => {
    setInfo((preVal) => ({ ...preVal, status: e.target.value }));
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputtextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
