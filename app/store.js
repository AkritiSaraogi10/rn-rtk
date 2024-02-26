import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/user/userSlice'
import postReducer from '../features/post/postSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    post: postReducer
  }
})

export default store