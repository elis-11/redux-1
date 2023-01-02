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
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }
  return (
    <div className="Todo">
      <h2>Todo-Redux-Toolkit</h2>
        <form onSubmit={handleAddTodo} className="todo">
          <input
            ref={inputRef}
            type="text"
            placeholder="Todo"
            value={newTodo}
            // value={todos.title}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      <div className="todos">
        {count > 0 && 
        todos.map((todo, index) => (
          <div key={todo.id} className="todo" >
            <div className="title">{index + 1}{':'} {todo.title}</div>
            <button onClick={()=>handleRemoveTodo(todo.id)}>Delete</button>
            {/* <button onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button> */}
          </div>
        ))
      }
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}
