import { iTodo } from "./todo";

export interface iInfo {
  todos: iTodo[];
  status: string;
  filteredTodos: iTodo[];
}
