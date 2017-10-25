import { TodoAction } from '../actions';
import { StoreState } from '../types/index';
import { ADD_TODO, REMOVE_TODO } from '../constants/index';

export function todos(state: StoreState, action: TodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [action.todo, ...state.todos]};
    case REMOVE_TODO:
      return {...state, todos: state.todos.filter(todo => todo !== action.todo)};
    default:
      return state;
  }
}