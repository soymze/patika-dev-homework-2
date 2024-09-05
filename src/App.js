import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Info from './components/info';
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


  return (
    <div className="App">
      <Header onAddTodo={addTodo} />
      <Main todos={todos} />
      <Footer />
      <Info />
    </div>
  );
}

export default App;
