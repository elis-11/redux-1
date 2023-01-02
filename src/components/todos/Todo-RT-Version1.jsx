import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todos/todoRTSlice";
import "./Todos.scss";

export const TodoRT = () => {
  const todos = useSelector((state) => state.todoRT);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const inputRef = useRef()

  const addNewTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: newTodo.title,
        description: newTodo.description,
      })
      );
      setNewTodo({ title: "", description: "" });
    // setNewTodo('');
    inputRef.current.focus();
  };

  return (
    <div className="Todo">
      <h2>Todo-Redux-Toolkit</h2>
      <div className="add">
        <form onSubmit={addNewTodo}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Title"
            value={newTodo.title}
            onChange={(e) => {
              setNewTodo({ ...newTodo, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo.description}
            onChange={(e) => {
              setNewTodo({ ...newTodo, description: e.target.value });
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div key={todo._id} className="todo">
            <div className="title">{todo.title}</div>
            <div className="description">{todo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
