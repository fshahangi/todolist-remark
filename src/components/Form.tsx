import React, { useState } from "react";
import { iInfo } from "../types/info";
import { iUsestate } from "../types/usestate";

interface FormProps {
  setInfo: React.Dispatch<React.SetStateAction<iUsestate>>;
  info: iInfo;
}

const Form = ({ setInfo, info }: FormProps) => {
  const [inputText, setInputText] = useState<string>("");

  const inputtextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setInfo((preVal) => ({
      ...preVal,
      todos: [
        ...info.todos,
        {
          title: inputText,
          completed: false,
          id: Math.random() * 1000,
          userId: Math.random() * 1000,
        },
      ],
    }));

    setInputText("");
  };
  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInfo((preVal) => ({
      ...preVal,
      status: e.target.value as "all" | "uncompleted" | "completed",
    }));
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
