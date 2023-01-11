import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sliceA from "./slices/counts/sliceA";
import sliceB from "./slices/counts/sliceB";
import sliceC from "./slices/counts/sliceC";
import counter from "./slices/counterSlice";
import todoRT from "./slices/todos/todoRTSlice";
import cruds from "./slices/todos/crudSlice";
import items from "./slices/todos/reduxTolSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  sliceA,
  sliceB,
  sliceC,
  counter,
  todoRT,
  cruds,
  items,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store)

// console.log(store);
