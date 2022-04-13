import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Login, INF_TokenResponse } from '../components/Forms/types';
import { API_URL } from '../consts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
      baseUrl: API_URL + '/users/' 
    }),

  endpoints: (builder) => ({
    login: builder.mutation<INF_TokenResponse, INF_Login>({
      query: (loginData) => ({
        url: 'token',
        method: 'POST',
        body: loginData
      })
    }),

  }),
})


export const { useLoginMutation } = authApi;