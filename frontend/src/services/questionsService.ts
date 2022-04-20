import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Ask } from '../components/Layouts/Ask/types';
import { INF_Tag } from '../components/Modules/Tags/types';
import { INF_Question } from '../components/Questions/types';
import { INF_AnswerForm, INF_RateObject } from '../components/ViewQuestion/types';
import { API_URL } from '../consts';
import { createBaseQuery } from './baseQueryReAuth';
import { getTokens } from './responseFuncs';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: createBaseQuery('/questions/'),
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

    postAskQuestion: builder.mutation<INF_Question, INF_Ask>({
      query: (questionData) => ({
          url: 'ask',
          method: 'POST',
          body: questionData,
      }),
    }),

    postAnswer: builder.mutation<INF_Question, any>({
      query: ({ answerData, questionId }) => ({
          url: `answer/${questionId}`,
          method: 'POST',
          body: answerData,
      }),
    }),

    postRateObject: builder.mutation<void, INF_RateObject>({
      query: (data) => ({
          url: `rate/${data.id}`,
          method: 'POST',
          body: {
            model: data.model,
            votes: data.votes,
            rateType: data.rateType
          },
      }),
    }),

    getTopTags: builder.query<INF_Tag[], void>({
      query: () => ({
          url: 'tags/top',
          method: 'GET',
      }),
    }),

    getTags: builder.query<INF_Tag[], void>({
      query: () => ({
          url: 'tags',
          method: 'GET',
      }),
    }),

  }),
})


export const { useGetQuestionsQuery, useGetQuestionQuery, usePostAskQuestionMutation,
  useGetTopTagsQuery, useGetTagsQuery, usePostAnswerMutation, usePostRateObjectMutation } = questionsApi;