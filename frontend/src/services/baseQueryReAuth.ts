import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../consts';
import { renewTokens } from '../features/funcs';
import { getTokens } from './responseFuncs';
import { Mutex } from 'async-mutex'

export function createBaseQuery(baseUrl: string) {
    const mutex = new Mutex();

    const baseQuery = fetchBaseQuery({ 
        baseUrl: API_URL + baseUrl, 
        prepareHeaders: (headers, { getState }) => {
            const accessToken = getTokens().access

            if(accessToken)
                headers.append('authorization', `Bearer ${accessToken}`);
            
            return headers
        }
    });

    const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = 
        async (args, api, extraOptions) => {
            
            let result = await baseQuery(args, api, extraOptions);

            if(result.error && result.error?.status === 401) {
                await renewTokens();
                result = await baseQuery(args, api, extraOptions);
            }
    
            return result;
    }

    return baseQueryWithReauth;
}