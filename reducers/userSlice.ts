import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import UserModel from '../models/userModel';

interface UserState {
  data: UserModel[];
  getuser: UserModel | {}; //check
  loading: boolean;
  error: string;
}

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: '',
    getuser: {},
  } as UserState,
  reducers: {
    setGetuserById: (state, action: PayloadAction<UserModel | {}>) => {
      state.getuser = action.payload;
      state.loading = false;
      state.error = '';
    },
    setData: (state, action: PayloadAction<UserModel[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = '';
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {setData, setLoading, setError, setGetuserById} =
  userSlice.actions;
export default userSlice.reducer;
