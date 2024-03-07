import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import PostModel from '../interface/postModel';

interface PostState {
  data: PostModel[];
  loading: boolean;
  error: string;
}

const userSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: '',
  } as PostState,
  reducers: {
    addPost: (state, action: PayloadAction<PostModel>) => {
      state.data = [action.payload, ...state.data];
      state.loading = false;
      state.error = '';
    },
    setData: (state, action: PayloadAction<PostModel[]>) => {
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
export const {setData, setLoading, setError, addPost} = userSlice.actions;
export default userSlice.reducer;
