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
          text={todo.text} 
          isDone={todo.isDone} 
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          handleToggleDone={handleToggleDone}
        />
      ))}
    </ul>
  );
}
