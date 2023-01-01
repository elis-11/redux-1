import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../redux/slices//counts/sliceB';


export const B = () => {
  const stateB = useSelector((state)=>state.sliceB.value)
  const dispatch = useDispatch()

  console.log('ComponentB Rerender')

  return (
    <div>
      <h1>{stateB}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
