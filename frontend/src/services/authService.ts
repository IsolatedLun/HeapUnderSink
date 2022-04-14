import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Login } from '../components/Forms/types';
import { API_URL } from '../consts';
import { INF_User } from '../features/types';
import { getTokens } from './responseFuncs';
import { INF_LoginResponse } from './types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
      baseUrl: API_URL + '/users/' 
    }),

  endpoints: (builder) => ({
    login: builder.mutation<INF_LoginResponse, INF_Login>({
      query: (loginData) => ({
        url: 'login',
        method: 'POST',
        body: loginData
      })
    }),

    register: builder.mutation<INF_User, FormData>({
      query: (signUpData) => ({
        url: 'register',
        method: 'POST',
        body: signUpData
      })
    })

  }),
})


export const { useLoginMutation, useRegisterMutation } = authApi;