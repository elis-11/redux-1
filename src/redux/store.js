import { configureStore } from "@reduxjs/toolkit";
import sliceA from "./slices/counts/sliceA";
import sliceB from "./slices/counts/sliceB";
import sliceC from "./slices/counts/sliceC";
import counter from "./slices/counterSlice";
import todoRT from "./slices/todos/todoRTSlice";

export const store = configureStore({
  reducer: {
    sliceA,
    sliceB,
    sliceC,
    counter,
    todoRT,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

console.log(store);
