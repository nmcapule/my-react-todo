import * as constants from '../constants';
import { Todo } from '../types';

export interface AddTodo {
  type: constants.ADD_TODO;
  todo: Todo;
}

export interface RemoveTodo {
  type: constants.REMOVE_TODO;
  todo: Todo;
}

export interface ToggleTodo {
  type: constants.TOGGLE_TODO;
  todo: Todo;
}

export type TodoAction = AddTodo | RemoveTodo | ToggleTodo;

export const addTodo = (todo: Todo) => ({ type: constants.ADD_TODO, todo });
export const removeTodo = (todo: Todo) => ({ type: constants.REMOVE_TODO, todo });
export const toggleTodo = (todo: Todo) => ({ type: constants.TOGGLE_TODO, todo });