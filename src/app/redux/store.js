import { configureStore } from '@reduxjs/toolkit'
import slices from './slices'

const store = configureStore({
  reducer: {
    names:slices,
  },
})

export default store