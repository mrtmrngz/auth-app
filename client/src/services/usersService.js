import { apiService } from './apiService.js'

const usersService = apiService.injectEndpoints({
    endpoints: builder => ({
        userInfo: builder.query({
            query: () => '/users/user-info'
        }),
        getAllUsers: builder.query({
            query: () => '/users/all-users'
        })
    })
})

export const { useUserInfoQuery, useGetAllUsersQuery } = usersService