// src/components/Main.js
import React from 'react';

const Main = ({ todos, onDeleteTodo }) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo}</label>
              <button className="destroy" onClick={() => onDeleteTodo(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
