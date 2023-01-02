import { createSlice } from "@reduxjs/toolkit";
import { todoInLS, addTodoInLS, deleteTodoInLS } from "../../../components/localStorage";

const initialState = {
  todos: [],
  count: 0,
  todoInLS: JSON,
};

// const saveTodoInLS = localStorage.getItem("updateTodoState")
//   if (saveTodoInLS) {
//     initialState = JSON.parse(saveTodoInLS)
//   }
//   console.log(saveTodoInLS)

export const todoRTSlice = createSlice({
  name: "todoRT",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().toString(),
        title: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
      addTodoInLS()
      // localStorage.setItem("updateTodoState", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
      deleteTodoInLS()
      // localStorage.removeItem("updateTodoState", JSON.stringify(state));
    },
  },
});

export const { addTodo, removeTodo } = todoRTSlice.actions;

export default todoRTSlice.reducer;
