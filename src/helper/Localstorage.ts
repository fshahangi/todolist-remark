// export const useLocal = (key: string) => {
//   const setData = (value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   const getData = () => {
//     let todoLocal = JSON.parse(localStorage.getItem(key));
//     return todoLocal;
//   };
//   return { setData, getData };
// };

import { useState } from "react";

export const useLocal = (key: string) => {
  const [data, setData] = useState<any>(null);

  const setDataToLocalStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };

  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  return { setData: setDataToLocalStorage, getData: getDataFromLocalStorage };
};
