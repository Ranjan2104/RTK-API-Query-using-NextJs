'use client'
import { useGetUserAllDetailsQuery } from '@/app/Store/Middleware/getUserApi'
import React from 'react'

const Home = () => {
  const { data, error, isLoading } = useGetUserAllDetailsQuery({})
  console.log(data)
  return (
    <div>
      <h1>This is Home Page - {data?.name}</h1>
    </div>
  )
}

export default Home