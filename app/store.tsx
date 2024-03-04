import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import globalReducer from '../reducers/globalSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
