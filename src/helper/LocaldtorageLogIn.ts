import { useState } from "react";
import { TlogIn } from "../types/todo";

export const useLocalLogIn = (key: string) => {
  const setLogIn = useState<TlogIn>()[1];
  const setLogInToLocalStorage = (value: TlogIn) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLogIn(value);
  };

  const getLogInFromLocalStorage = () => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  return {
    setLogInData: setLogInToLocalStorage,
    getLogInData: getLogInFromLocalStorage,
  };
};
