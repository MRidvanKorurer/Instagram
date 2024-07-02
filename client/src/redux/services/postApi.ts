import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostRes, ILikeData} from "../../types/type";

export const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/api/posts/' }),
  endpoints: (builder) => ({


    // allPosts
    getAllPost: builder.query({
      query: (name) => {
        return {
            url: `pokemon/${name}`,
            method: "GET"
        }
      },
    }),



    // timelinePost
    getTimelinePost: builder.query<IPostRes, string>({
      providesTags: ["Post"],
      query: (userId) => {
        return {
            url: `timeline/${userId}`,
            method: "GET"
        }
      },
    }),


    // likeDislikePost
    postLikeDislike: builder.mutation<IPostRes, ILikeData>({
      invalidatesTags: () => {
          return [{type: "Post"}]
      },
      query: (data) => {
        return {
            url: `/${data.postId}/like`,
            method: "PUT",
            body: {userId: data.userId}
        }
      },
    }),


    // deletePost
    postDelete: builder.mutation<IPostRes, ILikeData>({
      invalidatesTags: () => {
          return [{type: "Post"}]
      },
      query: (data) => {
        return {
            url: `/delete/${data.postId}`,
            method: "DELETE",
            body: {userId: data.userId}
        }
      },
    }),
    

  }),
})

export const { useGetAllPostQuery, useGetTimelinePostQuery, usePostLikeDislikeMutation, usePostDeleteMutation } = postApi;