import { configureStore } from "@reduxjs/toolkit";
import sliceA from "./slices/counts/sliceA";
import sliceB from "./slices/counts/sliceB";
import sliceC from "./slices/counts/sliceC";
import counter from "./slices/counterSlice";
import todoRT from "./slices/todos/todoRTSlice";
import cruds from "./slices/todos/crudSlice";
import items from "./slices/todos/reduxTolSlice";

export const store = configureStore({
  reducer: {
    sliceA,
    sliceB,
    sliceC,
    counter,
    todoRT,
    cruds,
    items,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// console.log(store);
