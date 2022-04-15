import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../consts';
import { renewTokens } from '../features/funcs';


const baseQuery = fetchBaseQuery({ baseUrl: API_URL + '/users/' });
export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = 
    async (args, api, extraOptions) => {
        await renewTokens();

        let result = await baseQuery(args, api, extraOptions);
        return result;
}