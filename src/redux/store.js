import { configureStore } from '@reduxjs/toolkit'
import sliceA from './slices/counts/sliceA'
import sliceB from './slices/counts/sliceB'
import sliceC from './slices/counts/sliceC'

export const store = configureStore({
  reducer: {
    sliceA,
    sliceB,
    sliceC,
  },
})

console.log(store)