import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/slices/counterSlice'

export const Counter = () => {
const counter = useSelector(state => state.counter.value)
const dispatch = useDispatch()

console.log("Counter Rerender");


  return (
    <div className='Counter'>
      <button onClick={() => dispatch(increment())}>+ 2</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>- 3</button>
    </div>
  )
}
