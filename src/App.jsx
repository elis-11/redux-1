import { NavLink, Route, Routes } from "react-router-dom";
import { Counter } from "./components/counter/Counter";
import "./App.scss";
import { Counts } from "./components/counts/Counts";
import { Todos } from "./components/todos/Todos";


function App() {
  return (
      <div className="App">
      <nav className="nav">
        <NavLink to='/'>Counter</NavLink>
        <NavLink to='/counts'>Counts</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Counter />} />
        <Route path="/counts/*" element={<Counts />} />
        <Route path="/todos/*" element={<Todos />} />  
      </Routes>
    </div>
  );
}

export default App;
