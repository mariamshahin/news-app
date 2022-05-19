import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';
import appConfig from 'app/config/app.config';
import { Comment, Post } from 'app/types';
import { findPost } from 'app/utils';
import _ from 'lodash';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(appConfig.newsApi);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export interface NewsState {
  pending: boolean;
  error: boolean;
  posts: Array<Post>;
  post: any;
  comments: Array<Comment>;
}

const initialState: NewsState = {
  pending: false,
  error: false,
  posts: [],
  post: {},
  comments: [],
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    getPost: (state, action) => ({
      ...state,
      post: findPost(state.posts, action.payload),
    }),
    addComment: (state, action) => ({
      ...state,
      comments: [...state.comments, action.payload],
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => ({
        ...state,
        pending: true,
      }))
      .addCase(fetchNews.fulfilled, (state, { payload }) => ({
        ...state,
        pending: false,
        posts: payload.articles,
      }))
      .addCase(fetchNews.rejected, (state) => ({
        ...state,
        pending: false,
        error: true,
      }))
      .addCase(newsSlice.actions.addComment, (state) => ({
        ...state,
        posts: [...state.posts, state.post],
      }));
  },
});

export const { getPost, addComment } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news;
export default newsSlice.reducer;
