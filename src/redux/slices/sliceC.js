import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const sliceC = createSlice({
  name: 'stateC',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }, 
})

export const { increment} = sliceC.actions

export default sliceC.reducer