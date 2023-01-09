import { useEffect, useRef, useState } from "react";
import "./Todos.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const TodoCRUD = () => {
  const inputRef = useRef()

  const [todos, setTodos] = useState(()=>{
    const savedTLS = localStorage.getItem('todo-crud')
    if(savedTLS) {
          return JSON.parse(savedTLS)
    } else {
      return [] }
  });

  useEffect(()=>{
    localStorage.setItem('todo-crud', JSON.stringify(todos))
  }, [todos])

  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  const addTodo = () => {
    const todoNewState = {
      id: Date.now().toString(),
      title: newTodo.title,
      description: newTodo.description,
    };
    setTodos([...todos, todoNewState]);
    setNewTodo({ ...newTodo, title: "", description: "" });
    inputRef.current.focus()
  };
  const handleAddTodo = (e) => {
    setNewTodo({ ...newTodo, [e.target.title]: e.target.value });
  };

  const handleDelete = (id) => {
    const deletePerson = todos.filter((todo) => todo.id !== id);
    setTodos(deletePerson);
  };

  return (
    <div className="Todo">
      <h2>Todo-CRUD</h2>
      <h3 style={{ marginTop: "1px" }}>
        {todos.length} List {todos.length === 1 ? "Todo" : "Todos"}
      </h3>
      <div className="add">
        <input
          ref={inputRef}
          type="text"
          title="title"
          placeholder="Title"
          value={newTodo.title}
          onChange={handleAddTodo}
        />
        <input
          type="text"
          title="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleAddTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>

        {todos.length ? (
          <div className="todos">
            
            {todos.map((todo) => (
              <div key={todo.id} className="todo">
                <div className="title">{todo.title}</div>
                <div className="description">{todo.description}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt
                    onClick={() => handleDelete(todo.id)}
                    className="icon"
                    role="button"
                    tabIndex="0"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{ marginTop: "1rem", textAlign: "center", color: "grey" }}
          >
            Your List is empty
          </p>
        )}
    </div>
  );
};
