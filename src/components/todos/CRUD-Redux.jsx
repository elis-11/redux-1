import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todos.scss";

export const CrudRedux = () => {
  const [cruds, setCruds] = useState(() => {
    const savedTodosInLs = localStorage.getItem("cruds");
    if (savedTodosInLs) {
      return JSON.parse(savedTodosInLs);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cruds", JSON.stringify(cruds));
  }, [cruds]);

  const [newCrud, setNewCrud] = useState({ title: "", description: "" });
  const inputRef = useRef();

  const addTodo = () => {
    const todoNewState = {
      id: new Date().toString(),
      title: newCrud.title,
      description: newCrud.description,
    };
    setCruds([...cruds, todoNewState]);
    setNewCrud({ ...newCrud, title: "", description: "" });
    inputRef.current.focus();
  };

  const handleAddTodo = (e) => {
    setNewCrud({ ...newCrud, [e.target.name]: e.target.value });
  };

  const handleDeleteTodo = (id) => {
    setCruds(cruds.filter((todo) => todo.id !== id));
    // const deletePerson = cruds.filter((todo) => todo.id !== id);
    // setCruds(deletePerson);
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
          value={newCrud.title}
          onChange={handleAddTodo}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newCrud.description}
          onChange={handleAddTodo}
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
