import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn JavaScript', completed: false },
    { text: 'Learn React', completed: false },
    { text: 'Have a life!', completed: false },
  ]);

  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

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

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className="todoapp">
      <Header onAddTodo={addTodo} />
      <Main
        todos={filteredTodos}
        onDeleteTodo={deleteTask}
        onUpdateTodo={updateTodo}
        onToggleCompletion={toggleCompletion}
      />
      <Footer
        todos={todos}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
