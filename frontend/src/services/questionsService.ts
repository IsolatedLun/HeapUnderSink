import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Question } from '../components/Questions/types';
import { API_URL } from '../consts';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ 
      baseUrl: API_URL + '/questions/' 
    }),

  endpoints: (builder) => ({
    getQuestions: builder.query<INF_Question[], void>({
      query: () => ({
          url: '',
          method: 'GET',
      }),
    }),

    getQuestion: builder.query<INF_Question, number>({
      query: (id) => ({
          url: `${id}`,
          method: 'GET',
      }),
    }),
  }),
})


export const { useGetQuestionsQuery, useGetQuestionQuery } = questionsApi;