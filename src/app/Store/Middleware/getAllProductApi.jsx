'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getAllProductApi = createApi({
  reducerPath: 'getAllProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllproduct: builder.query({
      query: (value) => `/todos/user/5`,
    }),
  }),
})

export const { useGetAllproductQuery } = getAllProductApi