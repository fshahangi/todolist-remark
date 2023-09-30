import axios from "axios";

interface iAxios {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const Service = async (): Promise<iAxios[]> => {
  const request = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return request.data;
};
