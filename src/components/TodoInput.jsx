import React from 'react';

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const addTodo = () => {
    if (todoValue.trim() !== '') {
      handleAddTodos(todoValue);
      setTodoValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo(); // 👈 Call the same function on Enter key press
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyDown={handleKeyDown} // 👈 Add todo on Enter
        placeholder="Enter To-Do"
      />
      <button onClick={addTodo}>Add</button> {/* 👈 Add todo on button click */}
    </header>
  );
}
