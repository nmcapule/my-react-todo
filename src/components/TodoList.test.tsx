import * as React from 'react';
import * as enzyme from 'enzyme';
import TodoList from './TodoList';


it('renders the correct default input todo item', () => {
  const todoList = enzyme.shallow(<TodoList todos={[]} />);
  expect(todoList.find('.todo-list>.input').text()).toEqual('');
});
