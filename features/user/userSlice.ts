import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../network/services/userService';
import  UserInterface from '../../interface/userInterface';

interface UserState {
  users: UserInterface[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    // const usersData: UserInterface[] = await UserService.getUser1();
    // return usersData;
  } catch (error) {
    console.log("error in api call");
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default userSlice.reducer;
