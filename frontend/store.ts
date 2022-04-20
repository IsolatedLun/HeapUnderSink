import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './src/features/user-slice';
import { authApi } from './src/services/authService';
import { questionsApi } from './src/services/questionsService'

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: userSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;