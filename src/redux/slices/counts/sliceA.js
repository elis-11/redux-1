import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const sliceA = createSlice({
  name: 'stateA',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }, 
})

export const { increment} = sliceA.actions

export default sliceA.reducer