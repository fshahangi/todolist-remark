import { StatusEnum } from "./enum";

export interface iUsestate {
  todos: iTodo[];
  status: StatusEnum;
  filteredTodos: iTodo[];
}
