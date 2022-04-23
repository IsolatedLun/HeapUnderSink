import { configureStore } from '@reduxjs/toolkit';
import { questionsSlice } from './src/features/questions-slice';
import { userSlice } from './src/features/user-slice';
import { authApi } from './src/services/authService';
import { questionsApi } from './src/services/questionsService'
import { userApi } from './src/services/userService';

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: userSlice.reducer,
    questions: questionsSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;