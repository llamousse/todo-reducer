import React, { useReducer } from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

import './components/Todo.css';

import { initialState, todoReducer } from './reducers/todoReducer.js';


const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div className="todoApp">
      <h3 className="todoTitle">To-Do List (Reducer)</h3>
      <TodoForm dispatch={dispatch}/>
      <TodoList todo={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
