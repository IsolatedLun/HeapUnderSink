import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from './src/services/questionsService'

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;