import React from 'react';

function Main({ todos, onDeleteTodo, onUpdateTodo, onToggleCompletion }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleCompletion(index)}
              />
              <label onDoubleClick={() => {
                const updatedText = prompt('Edit todo:', todo.text);
                if (updatedText !== null) onUpdateTodo(index, updatedText);
              }}>
                {todo.text}
              </label>
              <button className="destroy" onClick={() => onDeleteTodo(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
