import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosRT: [],
  count: 0,
};

export const todoRTSlice = createSlice({
  name: "todosRT",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().toString(),
        title: action.payload,
      };
      state.todosRT.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todosRT = state.todosRT.filter(
        (todo) => todo.id !== action.payload
      );
      state.count -= 1;
    },
  },
});

export const { addTodo, removeTodo } = todoRTSlice.actions;

export default todoRTSlice.reducer;
