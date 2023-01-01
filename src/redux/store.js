import { configureStore } from '@reduxjs/toolkit'
import sliceA from './slices/counts/sliceA'
import sliceB from './slices/counts/sliceB'
import sliceC from './slices/counts/sliceC'
import counter from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    sliceA,
    sliceB,
    sliceC,
    counter,
  },
})

console.log(store)