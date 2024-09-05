// src/components/Footer.js
import React from 'react';

function Footer({ todos, filter, setFilter, clearCompleted }) {
  const incompleteCount = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{incompleteCount}</strong> item{incompleteCount !== 1 ? 's' : ''} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === 'all' ? 'selected' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === 'active' ? 'selected' : ''}
            onClick={() => setFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === 'completed' ? 'selected' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
