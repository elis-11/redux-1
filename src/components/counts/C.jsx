import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/slices//counts/sliceC";

export const C = () => {
  const stateC = useSelector((state) => state.sliceC.value);
  const dispatch = useDispatch();

  console.log("ComponentC Rerender");

  return (
    <div>
      <h1>{stateC}</h1>
      <button onClick={() => dispatch(increment())}>+ 3</button>
    </div>
  );
};
