'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getUserAPi = createApi({
  reducerPath: 'getUserAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUserAllDetails: builder.query({
      query: (value) => `/users/Ranjan2104`,
    }),
  }),
})

export const { useGetUserAllDetailsQuery } = getUserAPi