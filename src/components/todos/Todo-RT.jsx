import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../redux/slices/todos/todoRTSlice";
import "./Todos.scss";
import {FaTrashAlt} from 'react-icons/fa'

export const TodoRT = () => {
  const { todosRT, count } = useSelector((state) => state.todoRT);
  const dispatch = useDispatch();
  const [todoRT, setNewTodoRT] = useState("");

  // const todosRT = useSelector((state) => state.todoRT.todosRT);
  // const count = useSelector((state) => state.todoRT.count)
  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoRT));
    setNewTodoRT("");
    inputRef.current.focus();
  };
  // const removeTodo = (id) => {
  //   dispatch(removeTodo(id));
  // };
  return (
    <div className="Todo">
      <h2>Todo-Redux-Toolkit</h2>
      <form onSubmit={handleAddTodo} className="todort">
        <input
          ref={inputRef}
          type="text"
          placeholder="Todo"
          value={todoRT}
          // value={todosRT.title}
          onChange={(e) => setNewTodoRT(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todos">
        {count > 0 &&
          todosRT.map((todo, index) => (
            <div key={todo.id} className="todo">
              <div className="title">
                {index + 1}
                {":"} {todo.title}
              </div>
              {/* <button onClick={() => removeTodo(todo.id)} role="button"> */}
              <FaTrashAlt  onClick={() => dispatch(removeTodo(todo.id))}
                role="button" />
            </div>
          ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
};
