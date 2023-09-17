export const useLocal = (key) => {
  const setData = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getData = () => {
    let todoLocal = JSON.parse(localStorage.getItem(key));
    return todoLocal;
    //setInfo((preVal) => ({ ...preVal, todos: todoLocal }));
  };
  return { setData, getData };
};
