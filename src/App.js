import { useEffect, useState } from "react";
import "./Styles.css";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  return (
    <div className="App">
      
        
      <form onSubmit={handleFormSubmit}>
        <label></label>
        <input
          name="todo"
          type="text"
          placeholder="Please enter the todo item here....."
          value={todo}
          onChange={handleInputChange}
        />
        <button onClick={() =>{
            alert("Do you want to add this Data to your todo list?");
            { handleInputChange()}}}>ADD TODO</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="listIteam">
            {todo.text} <button onClick={() =>{
              alert("Do you want to Remove this Data from your todo list?"); handleDeleteClick(todo.id)}}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}