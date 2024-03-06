import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface GlobalState {
  error: {status: boolean; messageText: string; code: number};
}

const initialState: GlobalState = {
  error: {
    status: false,
    messageText: '',
    code: 0,
  },
};

const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setErrorToast: (state, action) => {
      state.error.status = action.payload.status;
      state.error.messageText = action.payload.message;
      state.error.code = action.payload.code;
    },
  },
});

export default globalSlice.reducer;
export const {setErrorToast} = globalSlice.actions;
