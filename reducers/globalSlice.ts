import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface GlobalState {
  error: {status: boolean; messageText: string};
}

const initialState: GlobalState = {
  error: {
    status: false,
    messageText: '',
  },
};

const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setErrorToast: (state, action) => {
      state.error.status = true;
      state.error.messageText = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const {setErrorToast} = globalSlice.actions;
