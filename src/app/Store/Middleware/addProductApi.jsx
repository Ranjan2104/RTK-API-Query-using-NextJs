'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const addProductApi = createApi({
  reducerPath: 'addProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
        query: (value) => ({
            url: `/products/add`,
            method: 'POST',
            body: value
        })
    }),
  }),
})

export const { useAddProductMutation } = addProductApi