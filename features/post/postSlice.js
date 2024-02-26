// 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};
//get api
export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=${5}`)
    .then((response) => response.data);
});
//post
export const addPost = createAsyncThunk('post/addPost', async (postData) => {
  return axios
    .post(`https://jsonplaceholder.typicode.com/posts`, postData)
    .then((response) => response.data);
});

const postsSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = '';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      })
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        //will copy the previous state
        state.posts = [...state.posts, action.payload];
        state.error = '';
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
