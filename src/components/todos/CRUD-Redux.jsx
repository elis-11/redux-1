import { useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todos.scss";

export const CrudRedux = () => {
  const [todos, setTodos] = useState([
    {
      id: "t1",
      title: "Learn",
      description: "JS",
    },
  ]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const inputRef = useRef();

  const addTodo = () => {
    const todoNewState = {
      id: new Date().toString(),
      title: newTodo.title,
      description: newTodo.description,
    };
    setTodos([...todos, todoNewState]);
    setNewTodo({ ...newTodo, title: "", description: "" });
    inputRef.current.focus();
  };

  const handleAddTodo = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // const deletePerson = todos.filter((todo) => todo.id !== id);
    // setTodos(deletePerson);
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
        {todos.map((todo, index) => (
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
