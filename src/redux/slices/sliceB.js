import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const sliceB = createSlice({
  name: 'stateB',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }, 
})

export const { increment} = sliceB.actions

export default sliceB.reducer