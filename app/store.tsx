import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';
import globalReducer from '../features/globalSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cake: cakeReducer,
    icecream: icecreamReducer,
    post: postReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
