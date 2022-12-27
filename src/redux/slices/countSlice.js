import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'stateA',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }, 
  name: 'stateB',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }, 
  name: 'stateC',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  }, 
})

export const { increment} = counterSlice.actions

export default counterSlice.reducer