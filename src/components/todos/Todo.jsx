import React, { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todos.scss";

export const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedInLst = localStorage.getItem("todos");
    if (savedInLst) {
      return JSON.parse(savedInLst);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [todo, setTodo] = useState({ title: "", description: "" });
  const inputRef = useRef();

  const createTodo = () => {
    const addTodo = {
      _id: new Date().toString(),
      title: todo.title,
      description: todo.description,
    };
    setTodos([...todos, addTodo]);
    setTodo({ ...todo, title: "", description: "" });
    inputRef.current.focus();
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos._id !== id));
  };

  return (
    <div className="Todo">
      <h2>Todo</h2>
      <div className="add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Title"
          value={todo.title}
          onChange={(e) => {
            setTodo({ ...todo, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todo.description}
          onChange={(e) => {
            setTodo({ ...todo, description: e.target.value });
          }}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={todo._id} className="todo">
            <div className="title">
              {index + 1}: {todo.title}
            </div>
            <div className="description">{todo.description}</div>
            <FaTrashAlt role="button" onClick={() => deleteTodo(todo._id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
