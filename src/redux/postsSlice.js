// this is all reducer to
import { createSlice } from '@reduxjs/toolkit'
// frist thing .. create the action and make export to it
// seconde thing .. make dispatch to that action
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    array: [],
  },
  // create action creator
  reducers: {
    addPost: function (state, action) {
      // push items in array
      state.array.push(action.payload)
    },
    deletePost: function (state, action) {
      state.array = state.array.filter((item) => item.id != action.payload.id)
    },
    // arrow func
    updatePost: (state, action) => {
      state.array.map((item) => {
        if (item.id === action.payload.id) {
          // title of items "==" eqaul new value and new value will retrun from action payload
          // old value .............. new value from update
          item.title = action.payload.title
          // old value .............. new value from update
          item.disc = action.payload.disc
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
// export reducer
export const { addPost, deletePost, updatePost } = postsSlice.actions
export default postsSlice.reducer
