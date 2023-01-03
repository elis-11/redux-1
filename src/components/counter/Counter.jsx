import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../../redux/slices/counterSlice";

export const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("Counter Rerender");

  return (
    <div className="Counter">
      <button onClick={() => dispatch(incrementByAmount(2))}>+ 2</button>
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>- 1</button>
      <button onClick={() => dispatch(decrementByAmount(3))}>- 3</button>
    </div>
  );
};
