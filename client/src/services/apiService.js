import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {logOut} from "../redux/authSlice.js";

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
    credentials: 'include'
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatus === 401) {
        api.dispatch(logOut())
    }

    return result
}

export const apiService = createApi({
    reducerPath: "apiService",
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})