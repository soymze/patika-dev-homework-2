// src/App.js
import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Learn JavaScript',
    'Learn React',
    'Have a life!',
  ]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, updatedTodo) => {
    setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={addTodo} />
      <Main
        todos={todos}
        onDeleteTodo={deleteTask}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
