import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({ baseUrl: '/' });
export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = 
    async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);

        console.log(result);
        return result;
}