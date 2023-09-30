export interface iUsestate {
  todos: iTodo[];
  status: "all" | "uncompleted" | "completed";
  filteredTodos: iTodo[];
}
