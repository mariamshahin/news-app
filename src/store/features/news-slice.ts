import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';
import appConfig from 'app/config/app.config';
import { Post } from 'app/types';

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
}

const initialState: NewsState = {
  pending: false,
  error: false,
  posts: [],
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      //state.value += action.payload;
    },
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
      }));
  },
});

//export const {  } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news;
export default newsSlice.reducer;
