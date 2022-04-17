import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../consts';
import { renewTokens } from '../features/funcs';


export function createBaseQuery(baseUrl: string) {
    const baseQuery = fetchBaseQuery({ baseUrl: API_URL + baseUrl });
    const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = 
        async (args, api, extraOptions) => {
            await renewTokens();

            let result = await baseQuery(args, api, extraOptions);
            return result;
    }

    return baseQueryWithReauth;
}