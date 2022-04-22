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
            await mutex.waitForUnlock();
            
            let result = await baseQuery(args, api, extraOptions);
        
            if(result.error && result.error.status === 401) {
                if(!mutex.isLocked()) {
                    const release = await mutex.acquire();

                    try {
                        await renewTokens();
                        result = await baseQuery(args, api, extraOptions);
                        
                    }

                    finally {
                        release();
                    }
                }
            }

            else {
                result = await baseQuery(args, api, extraOptions);
            }

            return result;
    }

    return baseQueryWithReauth;
}