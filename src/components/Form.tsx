import React, { useState } from "react";
import { iUsestate } from "../types/usestate";
import { StatusEnum } from "../types/enum";

interface FormProps {
  setInfo: React.Dispatch<React.SetStateAction<iUsestate>>;
  info: iUsestate;
}

const Form = ({ setInfo, info }: FormProps) => {
  function stringToEnum<T>(enumObj: T, str: string): T[keyof T] {
    return enumObj[str as keyof T]; // If no match is found
  }

  const [inputText, setInputText] = useState<string>("");

  const inputtextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const autoid: number = info.todos.length;

    setInfo((preVal) => ({
      ...preVal,
      todos: [
        ...info.todos,
        {
          title: inputText,
          completed: false,
          id: autoid + 2,
          userId: autoid + 2,
        },
      ],
    }));

    setInputText("");
  };
  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const statusEnum = stringToEnum(StatusEnum, e.target.value);
    setInfo((preVal) => ({
      ...preVal,
      status: statusEnum,
    }));
  };

  return (
    <div>
      <form className="login-form">
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
