import React from 'react';

export default function TodoCard({ text, handleDeleteTodo, index, handleEditTodo, handleToggleDone, isDone }) {
  return (
    <li className={`todoItem ${isDone ? 'done' : ''}`}>
      <button onClick={() => handleToggleDone(index)} className="toggleButton">
        <i className={isDone ? 'fa-regular fa-square-check' : 'fa-regular fa-square'}></i>
      </button>

      <span className="todoText">{text}</span> {/* ✅ Display text directly */}

      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
