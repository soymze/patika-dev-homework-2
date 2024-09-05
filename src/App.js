// src/App.js
import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn JavaScript', completed: false },
    { text: 'Learn React', completed: false },
    { text: 'Have a life!', completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos([{ text: newTodo, completed: false }, ...todos]);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, updatedTodo) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, text: updatedTodo } : todo)));
  };

  const toggleCompletion = (index) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={addTodo} />
      <Main todos={todos} onDeleteTodo={deleteTask} onUpdateTodo={updateTodo} onToggleCompletion={toggleCompletion} />
      <Footer todos={todos} />
    </div>
  );
}

export default App;
