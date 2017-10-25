import * as React from 'react';
import { Todo } from '../types';
import './TodoList.css';

export interface Props {
  todos: Todo[];
  onAddTodo?: (todo: Todo) => void;
  onRemoveTodo?: (todo: Todo) => void;
  onToggleTodo: (todo: Todo) => void;
}

function TodoList({ todos, onAddTodo, onRemoveTodo, onToggleTodo }: Props) {
  return (
    <div className="todo-list">
      <input className="input" type="text" placeholder="my todo item" />
      {todos.map(todo => (
        <div className={`item ${todo.completed ? '-completed' : ''}`} onClick={() => onToggleTodo(todo)}>
          {todo.description}
        </div>
      ))}
    </div>
  );
}

export default TodoList;