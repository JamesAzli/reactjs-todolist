import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import registerServiceWorker from "./service-worker-registration"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  useEffect(() => {
    registerServiceWorker(); // ✅ Register service worker
  }, []);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify(newList || [])); // ✅ Store as array
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, { text: newTodo, isDone: false }]; // ✅ Store as object
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index].text; // ✅ Access text property
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  function handleToggleDone(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    persistData(updatedTodos);
    setTodos(updatedTodos);
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (Array.isArray(localTodos)) {
      setTodos(localTodos);
    } else {
      setTodos([]); // ✅ Ensure it's always an array
    }
  }, [])

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        todos={todos || []} 
        handleEditTodo={handleEditTodo}
        handleToggleDone={handleToggleDone}
      />

    </>
  )
}

export default App
