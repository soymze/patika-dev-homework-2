// src/components/Main.js
import React, { useState } from 'react';

const Main = ({ todos, onDeleteTodo, onUpdateTodo }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [completed, setCompleted] = useState(todos.map(() => false));

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditValue(todos[index]);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdateTodo(editingIndex, editValue);
    setEditingIndex(null);
    setEditValue('');
  };

  const handleToggle = (index) => {
    setCompleted(completed.map((completed, i) => i === index ? !completed : completed));
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={completed[index] ? 'completed' : ''}>
            {editingIndex === index ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  autoFocus
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={completed[index]}
                  onChange={() => handleToggle(index)}
                />
                <label onClick={() => handleEditClick(index)}>{todo}</label>
                <button className="destroy" onClick={() => onDeleteTodo(index)}></button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
