import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/slices/sliceA";

export const A = () => {
  const stateA = useSelector((state) => state.sliceA.value);
  const dispatch = useDispatch();

  console.log("ComponentA Rerender");

  return (
    <div>
      <h1>{stateA}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
