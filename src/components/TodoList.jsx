import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo, handleToggleDone } = props;
  
  return (
    <ul className='main'>
      {Array.isArray(todos) && todos.map((todo, todoIndex) => (
        <TodoCard 
          key={todoIndex}
          index={todoIndex}
          text={todo.text}  // ✅ Pass todo.text explicitly
          isDone={todo.isDone} // ✅ Ensure isDone is passed
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          handleToggleDone={handleToggleDone}
        />
      ))}
    </ul>
  );
}
