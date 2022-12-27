import { configureStore } from '@reduxjs/toolkit'
import sliceA from './slices/sliceA'
import sliceB from './slices/sliceB'
import sliceC from './slices/sliceC'

export const store = configureStore({
  reducer: {
    sliceA,
    sliceB,
    sliceC
  },
})

console.log(store)