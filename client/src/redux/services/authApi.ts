import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, IUserRes } from '../../types/type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/api/auth' }),
  endpoints: (builder) => ({


    register: builder.mutation<IUserRes, Pick<IUser, "fullname" | "username" | "email" | "password" |"bio" | "profilePicture">>({
      query: (formData) => {
        return {
            url: `/register`,
            method: "POST",
            body: formData
        }
      },
    }),


  }),
})

export const { useRegisterMutation } = authApi;