import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFile, IFileRes } from '../../types/type';

export const uploadFileApi = createApi({
  reducerPath: 'uploadFileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
  endpoints: (builder) => ({


    upload: builder.mutation<IFileRes, IFile>({
      query: (file) => {
        return {
            url: `/upload`,
            method: "POST",
            body: file
        }
      },
    }),


  }),
})

export const { useUploadMutation } = uploadFileApi;