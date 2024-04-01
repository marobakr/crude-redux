import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './postsSlice'

export const store = configureStore({
  // create redux store
  reducer: {
    // key : value as object
    posts: postsSlice,
  },
})
