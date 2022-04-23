import { createApi } from '@reduxjs/toolkit/query/react';
import { INF_User } from '../features/types';
import { createBaseQuery } from './baseQueryReAuth';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: createBaseQuery('/users/user/'),
  
  endpoints: (builder) => ({
    getUser: builder.query<INF_User, number>({
        query: (id) => ({
            url: `${id}`,
            method: 'GET',
        }),
      }),

  }),
})


export const { useGetUserQuery } = userApi;