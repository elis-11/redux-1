import { useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCrud } from "../../redux/slices/todos/crudSlice";
import "./Todos.scss";

export const CrudRedux = () => {
  // const [cruds, setCruds] = useState([]);
  const { cruds, count } = useSelector((state) => state.cruds);
  const dispatch = useDispatch();
  // const [newCrud, setNewCrud] = useState("");

  const [newCrud, setNewCrud] = useState({ title: "", description: "" });
  const inputRef = useRef();

  const addTodo = () => {
    // e.preventDefault();
    dispatch(addCrud(newCrud));
    setNewCrud({ ...newCrud, title: "", description: "" });
    inputRef.current.focus();
  };

  // const handleAddTodo = (e) => {
  //   setNewCrud({ ...newCrud, [e.target.name]: e.target.value });
  // };

  const handleDeleteTodo = (id) => {
    setCruds(cruds.filter((todo) => todo.id !== id));
    // const deletePerson = cruds.filter((todo) => todo.id !== id);
    // setCruds(deletePerson);
  };

  return (
    <div className="Todo">
      <h2>CRUD-Redux</h2>
      <p>This is my first redux-todo y'all!</p>

      <div className="add">
        <input
          ref={inputRef}
          type="text"
          name="title"
          placeholder="Title"
          value={newCrud.title}
          // onChange={handleAddTodo}
          onChange={(e) => setNewCrud(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newCrud.description}
          onChange={(e) => setNewCrud(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
        {/* <button type="submit">+</button> */}
      </div>

      <div className="todos">
        {cruds.map((crud, index) => (
          <div key={crud.id} className="todo">
            <div className="title">
              {index + 1}: {crud.title}
            </div>
            <div className="description">{crud.description}</div>
            <FaTrashAlt
              type="button"
              onClick={() => handleDeleteTodo(crud.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
