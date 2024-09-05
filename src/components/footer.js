import React from 'react';

function Footer({ todos }) {
  const incompleteCount = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{incompleteCount}</strong> item{incompleteCount !== 1 ? 's' : ''} left
      </span>
      <ul className="filters">
        <li><a href="#/" className="selected">All</a></li>
        <li><a href="#/">Active</a></li>
        <li><a href="#/">Completed</a></li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
