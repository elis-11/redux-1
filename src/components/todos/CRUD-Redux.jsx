import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todos.scss";

export const CrudRedux = () => {
  const [newTodos, setNewTodos] = useState(() => {
    const savedTodosInLs = localStorage.getItem("newTodos");
    if (savedTodosInLs) {
      return JSON.parse(savedTodosInLs);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("newTodos", JSON.stringify(newTodos));
  }, [newTodos]);

  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const inputRef = useRef();

  const addTodo = () => {
    const todoNewState = {
      id: new Date().toString(),
      title: newTodo.title,
      description: newTodo.description,
    };
    setNewTodos([...newTodos, todoNewState]);
    setNewTodo({ ...newTodo, title: "", description: "" });
    inputRef.current.focus();
  };

  const handleAddTodo = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleDeleteTodo = (id) => {
    setNewTodos(newTodos.filter((todo) => todo.id !== id));
    // const deletePerson = newTodos.filter((todo) => todo.id !== id);
    // setNewTodos(deletePerson);
  };

  return (
    <div className="Todo">
      <h2>CRUD-Redux</h2>
      <div className="add">
        <input
          ref={inputRef}
          type="text"
          name="title"
          placeholder="Title"
          value={newTodo.title}
          onChange={handleAddTodo}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleAddTodo}
        />
        <button onClick={addTodo}>+</button>
        {/* <button type="submit">+</button> */}
      </div>

      <div className="todos">
        {newTodos.map((todo, index) => (
          <div key={todo.id} className="todo">
            <div className="title">
              {index + 1}: {todo.title}
            </div>
            <div className="description">{todo.description}</div>
            <FaTrashAlt
              type="button"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
