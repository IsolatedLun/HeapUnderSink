import { createApi } from '@reduxjs/toolkit/query/react';
import { INF_Ask } from '../components/Layouts/Ask/types';
import { INF_Tag } from '../components/Modules/Tags/types';
import { INF_Question } from '../components/Questions/types';
import { INF_RateObject } from '../components/ViewQuestion/types';
import { createBaseQuery } from './baseQueryReAuth';
import { INF_PaginatedResponse } from './types';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: createBaseQuery('/questions/'),
  endpoints: (builder) => ({
    getQuestions: builder.query<INF_PaginatedResponse<INF_Question>, number>({
      query: (offset) => ({
          url: `?offset=${offset ? Number(offset) : 0}`,
          method: 'GET',
          keepUnusedDataFor: 10,
      }),
    }),

    getQuestion: builder.query<INF_Question, number>({
      query: (id) => ({
          url: `${id}`,
          method: 'GET',
      }),
      keepUnusedDataFor: 5,
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

    postAcceptAnswer: builder.mutation<INF_Question, any>({
      query: ({ answerId, questionId }) => ({
          url: `answer/${questionId}/accept`,
          method: 'POST',
          body: {
            'answer_id': answerId
          },
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
  useGetTopTagsQuery, useGetTagsQuery, usePostAnswerMutation, usePostRateObjectMutation,
  usePostAcceptAnswerMutation } = questionsApi;