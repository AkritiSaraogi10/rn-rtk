import {configureStore} from '@reduxjs/toolkit';
import globalReducer from '../reducers/globalSlice';
import userReducer from '../reducers/userSlice';
import postReducer from '../reducers/postSlice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    users: userReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
