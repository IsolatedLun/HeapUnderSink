import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../consts';
import { renewTokens } from '../features/funcs';
import { getTokens } from './responseFuncs';
import { Mutex } from 'async-mutex'

export function createBaseQuery(baseUrl: string) {
    function getBaseQuery (token: string) {
       return fetchBaseQuery({ 
            baseUrl: API_URL + baseUrl, 
            prepareHeaders: (headers, { getState }) => {
                if(token)
                    headers.append('authorization', `Bearer ${token}`);
                
                return headers
            }
        });
    }

    const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = 
        async (args, api, extraOptions) => {
            let baseQuery = getBaseQuery(localStorage.getItem('access')!);
            
            let result = await baseQuery(args, api, extraOptions);

            if(result.error && result.error?.status === 401) {
                await renewTokens().then(() => {
                    baseQuery = getBaseQuery(localStorage.getItem('access')!);
                });
                

                result = await baseQuery(args, api, extraOptions);
            }
    
            return result;
    }

    return baseQueryWithReauth;
}