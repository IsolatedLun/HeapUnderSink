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

    getUserByToken: builder.mutation<INF_User, void>({
      query: () => ({
        url: 'get-user',
        method: 'POST',
        headers: {
          'authorization': `Bearer ${getTokens().access}`
        }
      })
    })

  }),
})


export const { useLoginMutation, useGetUserByTokenMutation } = authApi;