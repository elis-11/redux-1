import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cruds: [],
  count: 0,
};

export const crudSlice = createSlice({
  name: "cruds",
  initialState,
  reducers: {
    addCrud: (state, action) => {
      const crud = {
        id: new Date().toString(),
        title: action.payload,
        description: action.payload,
      };
      state.cruds = [...state.cruds, crud];
      // state.cruds.push(crud);
      // state.count += 1;
    },
  },
});

export const { addCrud } = crudSlice.actions;

export default crudSlice.reducer;
