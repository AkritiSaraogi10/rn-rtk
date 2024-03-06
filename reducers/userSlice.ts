import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import UserModel from '../interface/userModel';

interface UserState {
  data: UserModel[];
  loading: boolean;
  error: string;
}

const userSlice = createSlice({
  name: 'users',
  initialState: {data: [], loading: false, error: ''} as UserState,
  reducers: {
    setData: (state, action: PayloadAction<UserModel[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = '';
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = '';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {setData, setLoading, setError} = userSlice.actions;
export default userSlice.reducer;
