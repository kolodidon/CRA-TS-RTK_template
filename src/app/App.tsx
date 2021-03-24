import React from 'react';
import { useSelector } from 'react-redux';

import { State } from '../../type';
import { CreateTodo, TodoList } from '../components/';

import './App.css';

const App = function () {
  const todos = useSelector((state: State) => state.todos);

  return (
    <div className="App">
      <div className="App__header">
        <h1>Шаблон развёрнутого проекта на RTK+TS</h1>
        <CreateTodo />
      </div>
      <div className="App__body">
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;