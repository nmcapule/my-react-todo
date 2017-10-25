export interface Todo {
  description: string;
  completed: boolean;
}

export interface StoreState {
  todos: Todo[];
}