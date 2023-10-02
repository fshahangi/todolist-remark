import axios from "axios";
import { iTodo } from "./types/todo";

export const Service = async (): Promise<iTodo[]> => {
  const request = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return request.data;
};
