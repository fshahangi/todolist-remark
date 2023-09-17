import axios from "axios";

export const Service = async () => {
  const request = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return request.data;
};
