import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      console.log(state);
      console.log(action);

      state.items.push({
        id: new Date().toString(),
        title: action.payload.title,
        completed: false,
      });
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    toggleCompleted(state, action) {
      const toggledItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      toggledItem.completed = !toggledItem.completed;  // change state
    },
  },
});

export const { addItem, removeItem, toggleCompleted } = itemSlice.actions;

export default itemSlice.reducer;
