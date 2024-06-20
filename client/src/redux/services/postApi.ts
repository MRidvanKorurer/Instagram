import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({


    getAllPost: builder.query({
      query: (name) => {
        return {
            url: `pokemon/${name}`,
            method: "GET"
        }
      },
    }),


  }),
})

export const { useGetAllPostQuery } = postApi;