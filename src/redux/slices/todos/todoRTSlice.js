import { createSlice } from "@reduxjs/toolkit";
// import { storeTodoToLS, loadTodoInLS, deleteTodoInLS } from "../../../components/localStorage";

// const saveTodoInLS = localStorage.getItem("updateTodoState")
//   if (saveTodoInLS) {
//     initialState = JSON.parse(saveTodoInLS)
//   } else {
//     return []
//   }
//   console.log(saveTodoInLS)


const initialState = {
  todos: [],
  count: 0,
};

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
      localStorage.setItem("todos", JSON.stringify(state.todos));
      
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addTodo, removeTodo } = todoRTSlice.actions;

export default todoRTSlice.reducer;
