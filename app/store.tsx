import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';
import globalReducer from '../features/globalSlice';

const store = configureStore({
  reducer: {
    user: userReducer,

    post: postReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
