import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { todos } from './reducers/index';
import { StoreState } from './types/index';

import Todo from './containers/Todo';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(todos, {
  todos: [
    { description: 'my first todo', completed: false },
    { description: 'my second todo', completed: true },
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
