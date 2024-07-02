import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserRes } from '../../types/type';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/api/users' }),
  endpoints: (builder) => ({


    getAllUser: builder.query<IUserRes, void>({
      query: () => {
        return {
            url: `/`,
            method: "GET",
        }
      },
    }),

    
    getSearchUser: builder.query<IUserRes, string>({
        query: (username) => {
          return {
              url: `/search?username=${username}`,
              method: "GET",
          }
        },
    }),

   
    getSingleUser: builder.query<IUserRes, string>({
        query: (username) => {
          return {
              url: `/single?username=${username}`,
              method: "GET",
          }
        },
    }),


    getSingleUserId: builder.query<IUserRes, string>({
      query: (userId) => {
        return {
            url: `/single?userId=${userId}`,
            method: "GET",
        }
      },
  }),


  }),
})

export const { useGetAllUserQuery, useGetSearchUserQuery, useGetSingleUserQuery, useGetSingleUserIdQuery } = userApi;