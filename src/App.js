import React from 'react';
import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'comer', completed: false },
  { text: 'ewe', completed: false }
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>



      <CreateTodoButton />
    </>
  );
}
//Export por defecto
export default App;
