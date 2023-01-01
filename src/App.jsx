import { NavLink, Route, Routes } from "react-router-dom";
import { Counter } from "./components/counter/Counter";
// import { Todo } from "./components/todo/Todo";
import "./App.scss";
import { Counts } from "./components/counts/Counts";


function App() {
  return (
      <div className="App">
      <nav className="nav">
        <NavLink to='/'>Counter</NavLink>
        <NavLink to='/counts'>Counts</NavLink>
        {/* <NavLink to='/todo'>Todo</NavLink> */}
      </nav>
      <Routes>
        <Route path="" element={<Counter />} />
        <Route path="/counts/*" element={<Counts />} />
        {/* <Route path="/todo" element={<Todo />} />   */}
      </Routes>
    </div>
  );
}

export default App;
