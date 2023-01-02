import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../redux/slices/todos/todoRTSlice";
import "./Todos.scss";

export const TodoRT = () => {
  const [newTodo, setNewTodo] = useState('')
  // const todos = useSelector((state) => state.todoRT.todos);
  // const count = useSelector((state) => state.todoRT.count)
  const {count, todos} = useSelector((state) => state.todoRT)
  const dispatch = useDispatch();
  const inputRef = useRef()

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo('')
    inputRef.current.focus();
  };
  const handleRemoveTodo = (_id) => {
    dispatch(removeTodo(_id));
  }
  return (
    <div className="Todo">
      <h2>Todo-Redux-Toolkit</h2>
      <div className="add">
        <form onSubmit={handleAddTodo}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Todo"
            value={todos.title}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="todos">
        {count > 0 && 
        todos.map((todo) => (
          <div key={todo._id} className="todo" >
            <div className="title">{todo.title}</div>
            <button onClick={handleRemoveTodo}>Delete</button>
          </div>
        ))
        }
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}
