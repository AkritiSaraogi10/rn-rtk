import {createSlice} from '@reduxjs/toolkit';

interface GlobalState {
  error: {status: boolean; messageText: string};
  hasInternet: boolean;
  visible: boolean;
}

const initialState: GlobalState = {
  error: {
    status: false,
    messageText: '',
  },
  hasInternet: true,
  visible: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setErrorToast: (state, action) => {
      state.error.status = true;
      state.error.messageText = action.payload;
    },
    setHasInternet: (state, action) => {
      state.hasInternet = action.payload;
    },
    setNetworkVisibleToast: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const {setErrorToast, setHasInternet, setNetworkVisibleToast} = globalSlice.actions;
