import {configureStore} from '@reduxjs/toolkit';
import globalReducer from '../reducers/globalSlice';
import userReducer from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
