import TodoList from '../components/TodoList';
import * as actions from '../actions/';
import { Todo, StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ todos }: StoreState) {
  return { todos };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
  return {
    onAddTodo: (todo: Todo) => dispatch(actions.addTodo(todo)),
    onRemoveTodo: (todo: Todo) => dispatch(actions.removeTodo(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);