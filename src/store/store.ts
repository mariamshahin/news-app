import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import newsReducer from './features/news-slice';

const store = configureStore({
  reducer: { news: newsReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
